/*Scrivi un programma che prenda un array di stringhe 
e le concateni in un'unica stringa.*/

let stringhe = ["Ciao", "sono", "Ale"];
let frase="";
for (let parola of stringhe){
    frase += parola + " ";
}
console.log(frase);