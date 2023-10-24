/*Creare un cronometro che registra il tempo trascorso 
e lo mostra in formato "mm:ss" utilizzando setInterval:*/

let secondi = 0;
let minuti = 0;
const intervalls = setInterval(function() {
    secondi++;
    console.log(`Minuti: ${minuti}, secondi: ${secondi}`);
    if (secondi == 60){
        minuti++;
        secondi=0;
    }
}, 1000);
