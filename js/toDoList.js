$(document).ready(function(){


  // add button event
  $("#addButton").on("click", function() {
    var toDoTitle = $("#newTitle").val().trim();
    var toDoText = $("#toDoText").val().trim();
    if (!toDoTitle || !toDoText) {
      return;
    };

    var newPanel = $("<div>").addClass("panel panel-primary").hide();
    var newPanelHeading = $("<div>").addClass("panel-heading");
    var panelTitle = $("<h4>").addClass("panel-title pull-left").append(toDoTitle);
    var deleteListBtn = $("#deleteListBtn").clone();
    var checkBtn = $("#completedBtn").clone();
    var clearfix = $("<div>").addClass("clearfix");
    newPanelHeading.append(panelTitle).append(deleteListBtn).append(checkBtn).append(clearfix);

    var newPanelBody = $("<div>").addClass("panel-body");
    var toDoContent = $("<p>").addClass("toDoContent").append(toDoText);
    newPanelBody.append(toDoContent);

    newPanel.append(newPanelHeading).append(newPanelBody);

    $(".toDoBody").append(newPanel);
    newPanel.fadeIn(1500);
  });

// complete event to apply strike through
  $(".panel").on("click", ".completedBtn", function(){
    $(this).siblings(".panel-title").contents().wrap("<del/>");
    $(this).parent().parent().children(".panel-body").children().contents().wrap("<del/>");
    console.log($(this).parent().parent().children(".panel-body").children());
  });

// delete event to delete the list
  $("#deleteListBtn").on("click", function(){
    alert("delete");
  });


  // search button to search the lists for any words
  $("#searchBtn").on("click", function(){
    alert("search");
  });


});