function arrayToList(coleccion){
	let list = null;
	for(let i = coleccion.length - 1; i >= 0; i--){
		list = {value: coleccion[1], rest: list};
	}
	return list;
}

function listToArray(lista) {
  let coleccion = [];
  for (let nodo = lista; nodo; nodo = nodo.rest) {
    coleccion.push(nodo.value);
  }
  return coleccion;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));