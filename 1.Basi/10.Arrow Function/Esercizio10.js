/*Scrivi una arrow function
che prenda due parametri, una parola e una lunghezza, 
e restituisca true se la parola è più lunga della lunghezza specificata, 
altrimenti restituisca false.*/

const eLunga = (parol, lung)  => parol.length == lung? (true) : (false) 
// parol.length > lung

let parol = "Aldo"
let lung = 4

console.log(eLunga(parol, lung));
