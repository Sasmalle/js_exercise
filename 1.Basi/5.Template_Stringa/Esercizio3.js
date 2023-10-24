/*Scrivi un programma 
che richieda l'input dell'utente per il nome e l'età, 
quindi utilizzi un template literal 
per creare un messaggio personalizzato e stamparlo sulla console.*/

const nome = prompt("nome: ");
const età = prompt("età: ");
const messaggio = `Ciao ${nome}, hai ${età}`
console.log(messaggio)