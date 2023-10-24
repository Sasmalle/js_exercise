/*Scrivi una funzione che prenda un parametro numero 
e restituisca true se il numero è pari, altrimenti restituisca false.*/
function epari (numero){
    if(numero%2==0)
        return true;
    return false;
}
let numero = 4;
console.log(epari(numero));