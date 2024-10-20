document.addEventListener('DOMContentLoaded', function () {

    const squares = document.querySelectorAll('#board div');
    
    let currentPlayer = "X";
    
    const gameState = Array(9).fill(null);  

    squares.forEach((square, index) => {
        square.classList.add('square');
        
        square.addEventListener('click', function () {

            if (square.textContent === "") {

                square.textContent = currentPlayer;
                
                square.classList.add(currentPlayer);
                
                gameState[index] = currentPlayer;

                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});
