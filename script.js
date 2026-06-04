const cells = document.querySelectorAll(".cell");
const statusText = docunment.getElementById("status");
const restartBtn = docunment.getElementById("restart")

let currentPlayer = "X";
let gameActive = true;
let board = ["", "" ,"" ,"" ,"" , "", "", "", ""];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  ];

function handleCellClick() {
  const index = this.dataset.index;

  if (board[index] !== "" || !gameActive) {
    return;
  }
