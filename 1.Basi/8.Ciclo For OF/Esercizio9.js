/*Scrivi un programma che prenda un array di numeri 
e calcoli la media di tutti gli elementi.*/
let numberis = [1,2,3,4,5];
let sommu = 0;
for(let numberi in numberis){
    sommu += numberis[numberi]
}
let media = sommu / numberis.length;
console.log(media);
