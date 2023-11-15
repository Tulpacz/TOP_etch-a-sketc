function populateBoard(size){let board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
let squares = board.querySelectorAll("div");
squares.forEach((div) => div.remove());


for(let i=0;i<size*size;i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);

}}

populateBoard(16);

function changeSize(input){
    populateBoard(input);
}