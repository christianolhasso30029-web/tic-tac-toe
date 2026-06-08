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

board[index] = currentPlayer;
  this.textContent = currentPlayer;

checkWinner();

if (gameActive) {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = Player ${currentPlayer}'s Turn';
    }
}

function checkWinner() {
  for (let combo of winningCombinations) {
    consy [a, b, c] = combo;

    if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
  ) {
      statusText.textContent = 'Player ${currentPlayer} Wins!';
      gameActive = false;
      return;
    }
  }
  
  if (!board.includes("")) {
    statusText.textContent = " It's a Draw!";
    gameActive = false;
  }
}

function restartGame() {
  board = [ "", "" ,"" ,"" ,"" , "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  statusText.textContent = "Player X's Turn";
  
    
  
