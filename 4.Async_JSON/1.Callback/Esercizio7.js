/*Utilizzare un callback 
per calcolare la somma degli elementi di un array:*/
const numeris = [1, 2, 3, 4, 5];

function sommaNumeri(num1, num2){
    return num1+num2;
}
const somma = numeri.reduce(sommaNumeri, 0);
console.log(somma);