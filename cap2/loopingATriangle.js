// My Looping a triangle

for(let i = 1; i <= 7 ; i++){
    var gatos = "";
    for(let a = i; a > 0; a--){
        gatos += "#";
    }
    console.log(gatos);
}

//Solution DX
for (let linea = "#"; linea.length < 8; linea += "#"){
    console.log(linea);
}