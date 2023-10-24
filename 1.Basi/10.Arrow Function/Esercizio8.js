/*Scrivi una arrow function 
che prenda due parametri numerici, minimo e massimo, 
e restituisca un numero casuale 
compreso tra il valore minimo e il valore massimo.*/

const casuale = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;
console.log(casuale(2,4));