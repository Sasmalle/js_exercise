/*Scrivi un programma che prenda una stringa in input 
e stampi i caratteri presenti.*/
let stringa = prompt("Stringa: ");
for(let l in stringa) {
    let lettera = stringa.charAt(l);
    console.log(lettera);
}