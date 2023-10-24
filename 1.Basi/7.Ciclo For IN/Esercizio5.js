/*Scrivi un programma che prenda un oggetto in input 
e stampi sulla console solo le chiavi dell'oggetto.*/
let nome = prompt("nome");
let cognome = prompt("cognome");
let età = prompt("età");
let corso = prompt("corso");
let studente = {
    nome,
    cognome,
    età,
    corso,
  };
for (let key in studente) {
    console.log(key);
}
