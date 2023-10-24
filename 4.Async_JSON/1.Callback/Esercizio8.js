/*Utilizzare un callback 
per mappare gli elementi di un array a nuovi valori:*/
const numer = [1, 2, 3, 4, 5];

function triplica (n){
    return n*3;
} 
const triplicato=numer.map(triplica);
console.log(triplicato);