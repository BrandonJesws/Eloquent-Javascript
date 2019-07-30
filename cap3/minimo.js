function minimo(a, b){
	if (a < b) {
		return a;
	}else if(a > b){
		return b;
	}else{
		return "Los numeros son iguales";
	}
}

console.log(minimo(5,8));
console.log(minimo(9,-15));
console.log(minimo(2,2));