/*Scrivi un programma che prenda un array di numeri 
e stampi gli elementi in ordine inverso.*/
let numeric = [1,2,330,4,5,6,7,8,9,25,29];
let n = 1

for(let numero of numeric){
    numprima = numeric.length-n
    let inverso = numeric[numprima];
    console.log(inverso);
    n++;
}