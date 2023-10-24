/*Scrivi un programma che prenda un array di numeri 
e calcoli la somma di tutti gli elementi.*/
let numeri = [1,2,3,4,5];
let somma = 0;
for (let numero of numeri){
    somma += numero;
}
console.log(somma);