document.addEventListener('DOMContentLoaded', function () {
    // Select all div elements inside the board
    const squares = document.querySelectorAll('#board div');

    // Add the class 'square' to each square
    squares.forEach(square => {
        square.classList.add('square');
    });
});
