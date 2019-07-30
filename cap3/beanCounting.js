function countBs (cadena){
	let contador = 0;
	for(let i=0;i < cadena.length;i++){
		if(cadena[i] == 'B'){
			contador++;
		}
	}
	return contador;
}

function countChar(cadena, letra){
	let contador = 0;
	for(let i=0;i < cadena.length;i++){
		if(cadena[i] == letra){
			contador++;
		}
	}
	return contador;
}

console.log(countBs("BBCbBnmBb"));
console.log(countChar("kakkerla", "k"));
