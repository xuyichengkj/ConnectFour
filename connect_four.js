var colSize = 7;
var rowSize = 6;
var colFirstIdx = [6,6,6,6,6,6,6];
var curPlayer = 0;

var playerColor = ["red", "yellow"];
var playerDisp  = ["lightPink", "lightYellow"];

function clearBoard() {
  colFirstIdx = [6,6,6,6,6,6,6];
  $("#rstBtn").addClass("disabled");
  $(".circle").css("background-color", "white");
  console.log("clearBoard called!");
}

function colNotFull (colId) {
  return (colFirstIdx[colId] > 0);
}

function placeDisc(){
  $("#rstBtn").removeClass("disabled");
  var colId = $(this).closest('td').index();
  if (colNotFull(colId)) {
    changeColor(colFirstIdx[colId]-1, colId, playerColor[curPlayer]);
    colFirstIdx[colId]--;
    curPlayer = (curPlayer == 1) ? 0 : 1;
  }
}

function changeColor(rowId, colId, color) {
  $("tr").eq(rowId).find(".circle").eq(colId).css("background-color", color);
}

$('#rstBtn').on("click",clearBoard);
$('.grid .circle').hover(
  function(){
    var colId = $(this).closest('td').index();
    if (colNotFull(colId)) {
      changeColor(colFirstIdx[colId]-1, colId, playerDisp[curPlayer]);
    }
  },
  function (){
    var colId = $(this).closest('td').index();
    if (colNotFull(colId)) {
      changeColor(colFirstIdx[colId]-1, colId, "white");
    }
  }
);
$('.grid .circle').on("click", placeDisc);
