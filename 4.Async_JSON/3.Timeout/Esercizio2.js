/*Creare un timer che mostra un messaggio dopo un certo numero di secondi
utilizzando setTimeout:*/
const tempos = 5
setTimeout(function() {
    console.log(`Sono passati ${tempos} secondi`);
}, tempos*1000);
