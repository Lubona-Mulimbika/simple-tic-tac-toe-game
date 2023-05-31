const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let isGameActive;

const winningScenarios = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];
// board array to push clicked cells
const board = ["", "", "", "", "", "", "", "", ""];

// Add click event listener to each cell
cells.forEach((cell, index) => {
  isGameActive = true;
  cell.addEventListener("click", function handleCellClick() {
    if (this.textContent === "" && isGameActive === true) {
      this.textContent = currentPlayer;
      board[index] = currentPlayer;
      checkWin(currentPlayer);
      checkDraw();

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

function checkWin(player) {
  for (let i = 0; i < winningScenarios.length; i++) {
    const [cell1, cell2, cell3] = winningScenarios[i];

    if (
      board[cell1] === player &&
      board[cell2] === player &&
      board[cell3] === player
    ) {
      alert("Player " + player + " wins!"); // Player has won
      isGameActive = false;
    }
  }
}
// check for a draw
function checkDraw() {
  if (board.every((cell) => cell !== "")) {
    isGameActive = false;
    alert("The game is a draw!");
  }
}

const resetBtn = document.querySelector("#reset-button");

// Add click event listener to the reset button
resetBtn.addEventListener("click", function resetGame() {
  // Reset the text content of each cell to an empty string and reset current player to X
  cells.forEach(function (cell) {
    currentPlayer = "X";
    cell.textContent = "";
  });
  board.fill(""); // Clear the board array
  isGameActive = true; // Set the game to active
});
