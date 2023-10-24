/*Creare un timer 
che mostra il tempo trascorso dall'inizio in secondi 
utilizzando setInterval:*/
let tempo = 0;
const intervall = setInterval(function() {
    tempo++;
    console.log("Secondi: "+tempo);
}, 1000);