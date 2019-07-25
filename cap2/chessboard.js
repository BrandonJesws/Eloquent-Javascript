// My Chessboard

var size = 8;
var flag = false;
var tablero = "";

for(let i = 0; i < size; i++){
    for(let a = 0; a < size; a++){
        if(flag === false){
            tablero += "  ";
        }else if(flag === true){
            tablero += "#";
        }
        flag = !flag;
    }
    tablero += "\n";
    flag = !flag;
}
console.log(tablero);

// Solution DX
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);