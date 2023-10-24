/*Scrivi un codice che prenda la data di nascita come input 
e calcoli l'età corrente.*/
let datea= new Date();
let anno = datea.getFullYear();
function eta (dataNascita){
    return anno - dataNascita  
}

console.log(eta(2003));
