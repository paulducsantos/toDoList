$(document).ready(function(){


  // add button event
  $("#addButton").on("click", function(e) {
    e.preventDefault();
    var toDoTitle = $("#newTitle").val().trim();
    var toDoText = $("#toDoText").val().trim();
    if (!toDoTitle || !toDoText) {
      return;
    };

// create the button and new content here
    var deleteListBtn = $("<button>").attr("type", "button").addClass("btn btn-warning btn-circle pull-right deleteListBtn");
    var deleteGlyph = $("<i>").addClass("glyphicon glyphicon-remove");
    deleteListBtn.append(deleteGlyph);
    var checkBtn = $("<button>").attr("type", "button").addClass("btn btn-info btn-circle pull-right completedBtn");
    var checkGlyph = $("<i>").addClass("glyphicon glyphicon-ok")
    checkBtn.append(checkGlyph);
    var newPanel = $("<div>").addClass("panel panel-primary").hide();
    var newPanelHeading = $("<div>").addClass("panel-heading");
    var panelTitle = $("<h4>").addClass("panel-title pull-left").append(toDoTitle);
    var clearfix = $("<div>").addClass("clearfix");

// appended the title to panel along with buttons
    newPanelHeading.append(panelTitle).append(deleteListBtn).append(checkBtn).append(clearfix);
// create new div for new content here
    var newPanelBody = $("<div>").addClass("panel-body");
    var toDoContent = $("<p>").addClass("toDoContent").append(toDoText);
    newPanelBody.append(toDoContent);
// append the new content to the new panel
    newPanel.append(newPanelHeading).append(newPanelBody);

// append the new panel to the body of to do list panel
    $(".toDoBody").append(newPanel);
    newPanel.fadeIn(1500);
// clear variables
    deleteListBtn = null;
    deleteGlyph = null;
    checkBtn = null;
    checkGlyph = null;
    $("#newTitle").val("").focus();
    $("#toDoText").val("");
  });

// complete event to apply strike through
  $(".panel").on("click", ".completedBtn", function(){
    $(this).siblings(".panel-title").addClass("strike-through");
    $(this).parent().parent().children(".panel-body").children().addClass("strike-through");
    $(this).fadeOut("slow");
  });

// delete event to delete the list
  $(".panel").on("click", ".deleteListBtn", function(){
    $(this).parent().parent().fadeTo("slow", 0, function(){
      $(this).slideUp("slow", function(){
        $(this).remove();
      });
    });
  });

  // search button to search the lists for any words
  $("#searchBtn").on("click", function(){
    alert("search");
  });
});