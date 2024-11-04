let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = function() {
    setGame();
}

function setGame() {
    //setting up grid for game board
    for (let i = 0; i < 9; i++){
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); //getting called ever 2 sec
    setInterval(setPlant, 2000);
}

const getRandomTile = () => {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

const setMole = () => {
    if (gameOver){
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num;
    //checks if they're occupying the same tile
    do{
        num = getRandomTile();
    } while (currPlantTile && currPlantTile.id === num);
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
} 

const setPlant = () => {
    if (gameOver){
        return;
    }
    if (currPlantTile){
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png"
    let num;
    do{
        num = getRandomTile(); 
    } while (currMoleTile && currMoleTile.id === num);

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver){
        return;
    }
    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString(); 
    }else{
        if (this == currPlantTile){
            document.getElementById("score").innerText = "GAME OVER: " + score.toString();
            gameOver = true;
        }
    }
}
