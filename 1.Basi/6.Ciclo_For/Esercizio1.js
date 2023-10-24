/*Scrivi un programma che prenda una stringa in input 
e stampi i caratteri della stringa, uno per riga.*/

let stringa =prompt();
for (let i = 0; i < stringa.length; i++){
    console.log(stringa.charAt(i));
}