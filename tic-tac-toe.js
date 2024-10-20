document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    let currentPlayer = "X";
    const gameState = Array(9).fill(null);

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
});

