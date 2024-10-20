document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.getElementById('new-game');
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

    function checkWinner() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return true;
            }
        }
        return false;
    }

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click', function () {
            if (square.textContent === "" && !statusDiv.classList.contains('you-won')) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;

                if (checkWinner()) {  
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add('you-won');
                    return;  
                }

                currentPlayer = currentPlayer === "X" ? "O" : "X";
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

    function resetGame() {
        gameState.fill(null); 
        squares.forEach(square => {
            square.textContent = ""; 
            square.classList.remove('X', 'O', 'hover'); 
        });
        statusDiv.textContent = "Welcome to Tic-Tac-Toe!"; 
        statusDiv.classList.remove('you-won'); 
        currentPlayer = "X"; 
    }

    newGameButton.addEventListener('click', resetGame);
});
