/*Scrivi una funzione che prenda un array di numeri come parametro 
e restituisca un oggetto
con le proprietà "massimo" e "minimo" 
che rappresentano rispettivamente il valore massimo 
e il valore minimo dell'array.*/

function maxmin (numeri){
    const massimo = Math.max(...numeri);
    const minimo = Math.min(...numeri);
    return {
        massimo,
        minimo,
    };
}

let arrayNumb = [1,2,3,7,4,9,190,8];
const risultato = maxmin(arrayNumb);
console.log(risultato.massimo);
console.log(risultato.minimo);
