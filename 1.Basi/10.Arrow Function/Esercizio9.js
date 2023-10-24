/*Scrivi una arrow function che prenda un array di stringhe come parametro
e restituisca la concatenazione di tutti gli elementi dell'array.*/
const arrayConcatenazione = (arrayStr) => {
    let parola="";
    for (let str of arrayStr) {
        parola += str + " "; 
    }
    return parola;
}

let arrayStr = ["Ciao","io","sono","Alessandro"]
console.log(arrayConcatenazione(arrayStr));