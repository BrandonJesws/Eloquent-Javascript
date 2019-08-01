function rango(a, b){
	let coleccion = [];
	if(a < b ){
		for(let i = a; i <= b; i++){
			coleccion.push(i);
		}
	}else{
		for(let i = a; i >= b; i--){
			coleccion.push(i);
		}
	}

	return coleccion; 
}

function suma(numeros){
	let total = 0;
	for(let numero of numeros){
		total += numero;
	}
	return total;
}

console.log(suma(rango(1,10)));

