/*Scrivi un programma che prenda una stringa 
e conti il numero di vocali presenti.*/
let strings = prompt("Parola ")
const vocali = ["a","e","i","o","u","A","E","I","O","U"]
let vocalsNumb=0;
for (let lettera of strings){
   for (let vocale of vocali){
        if (lettera==vocale){
            vocalsNumb++;
        }
   } 
}
console.log(vocalsNumb);