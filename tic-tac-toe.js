document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.getElementById('new-game');
    let currentPlayer = "X";
    const gameState = Array(9).fill(null);

    // Define winning combinations 
    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6]  // Diagonal from top-right to bottom-left
    ];

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click', function () {
            if (square.textContent === "" && !checkForWinner()) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;
                if (checkForWinner()) {
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add('you-won');
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        square.addEventListener('mouseenter', function () {
            if (square.textContent === "") {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseleave', function () {
            square.classList.remove('hover');
        });
    });

    function checkForWinner() {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        });
    }

    function resetGame() {
        gameState.fill(null); 
        squares.forEach(square => {
            square.textContent = ""; 
            square.classList.remove('X', 'O', 'hover'); 
        });
        statusDiv.textContent = "Welcome to Tic-Tac-Toe!"; 
        currentPlayer = "X"; 
    }

    newGameButton.addEventListener('click', resetGame);
});

