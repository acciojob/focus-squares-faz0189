// Select all squares
const squares = document.querySelectorAll(".square");

// Function to change colors on hover
function changeColors(event) {
    squares.forEach(square => {
        square.style.backgroundColor = (square === event.target) ? "#E6E6FA" : "#6F4E37";
    });
}

// Function to reset colors
function resetColors() {
    squares.forEach(square => {
        square.style.backgroundColor = "#E6E6FA";
    });
}

// Attach event listeners to each square
squares.forEach(square => {
    square.addEventListener("mouseover", changeColors);
    square.addEventListener("mouseout", resetColors);
});
