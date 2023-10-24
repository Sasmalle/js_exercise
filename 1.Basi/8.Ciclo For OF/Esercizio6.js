/*Scrivi un programma che prenda un array di numeri 
e trovi il valore massimo.*/
let numeris = [11,2,3,4,5,6,7,8,9,10];
let numeromax= numeris[0];
for(let numero of numeris){
    if(numero>numeromax){
        numeromax=numero;
    }
}
console.log(numeromax);