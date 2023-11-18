let color = "black";
let click = true;
let waveSaturation = 0;
let waveGrowing=1
let hue = 120;
let saturation = 100;
let lightness
function populateBoard(size){
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(let i=0;i<size*size;i++){
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);

}}

populateBoard(16);

function changeSize(input){
    
    if(input >=2 && input <=100){
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
    }
    else{
        document.querySelector(".error").style.display = "flex";
    }
}

function colorSquare(){
    if(click)   {if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    }
    else if(color=="wave"){
        this.style.backgroundColor = `hsl(180,50%,${waveSaturation}%`;//`hsl(0, 0, ${waveSaturation})`;
        waveSaturation +=10*waveGrowing;
        if(waveSaturation>=100 ||waveSaturation<=0){waveGrowing=-waveGrowing}
    }
    else if(color=="fade"){
        //this.style.backgroundColor = `hsl(${hue},${saturation},${waveSaturation}%`;
        //console.log(this.style.backgroundColor+rgb(10,10,10));
        rgb = this.style.backgroundColor.replace(/[^\d,]/g, '').split(',');
        rgb = rgb.map(function (x) { 
            return parseInt(x, 10); 
          });
        rgb[0] += 10;
        rgb[1] += 10;
        rgb[2] += 10;
        this.style.backgroundColor = `#${rgb[0].toString(16)}${rgb[1].toString(16)}${rgb[2].toString(16)}`;
        console.log(`#${rgb[0].toString(16)}${rgb[1].toString(16)}${rgb[2].toString(16)}`);
        
    }
    
    else
    {this.style.backgroundColor = color};
}
}

function changeColor(choice){
    color = choice;
    
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = `blue`);
}

document.querySelector(`body`).addEventListener(`click`, (e)=>{
    if(e.target.tagName != `BUTTON`){
        click = !click;

        if(click)
        {
          document.querySelector('.mode').textContent = "Mode: Coloring";
        }
        else{
            document.querySelector('.mode').textContent = "Mode: Not coloring";
        }
    }

    });