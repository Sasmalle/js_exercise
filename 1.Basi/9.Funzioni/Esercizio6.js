/*Scrivi una funzione che prenda un array di numeri come parametro 
e restituisca la media di tutti gli elementi.*/
function media(numbers){
    let somma = 0;
    for(let number of numbers){
        somma = somma+ number;
    }
    // somma = numeri.reduce((acc, curr) => acc + curr, 0);
    return somma/(numbers.length);
}
const numbers = [1,2,3,4,5];
console.log(media(numbers));