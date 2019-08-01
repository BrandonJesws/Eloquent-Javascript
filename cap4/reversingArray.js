function reverseArray(coleccion){
	let nuevaColeccion = [];
	for(let numero of coleccion){
		nuevaColeccion.unshift(numero);
	}
	return nuevaColeccion;
}

function reverseArrayInPlace(arrayValue){
	let temporal = 0;
	for(let i = 0; i < Math.floor(arrayValue.length / 2); i++){
		temporal = arrayValue[i];
		arrayValue[i] = arrayValue[arrayValue.length -1 - i];
		arrayValue[arrayValue.length -1 -i] = temporal;
	}	
	return arrayValue;
}

let arrayValue = [1,2,3,4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
