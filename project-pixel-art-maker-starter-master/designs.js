// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  //Get number of rows and cols input
  var rows = $("#input_height").val();
  var cols = $("#input_width").val();

  //Get table
  var table = $("#pixel_canvas");

  table.children().remove();

  for (var i = 0; i < rows; i++) { //Create  our rows
    table.append("<tr></tr>");
    for (var j = 0; j < cols; j++) { //Create our cols
      table.children().last().append("<td></td>");
    }
  }

  //Place a Listener
  table.on("click", "td", function() {
    //Get color from color picker
    var color = $("input[type='color']").val();
    //Apply color to cell
    $(this).attr("bgcolor", color);
  });
}

// Listen for button clicks to trigger makeGrid()
$("input[type='submit']").click(function(cl) {
  cl.preventDefault(); //Required to avoid submit and page reload
  makeGrid();
});