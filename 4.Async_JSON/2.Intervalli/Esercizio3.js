/*Cambiare il colore di un elemento del DOM ogni 2 secondi 
utilizzando setInterval:*/
const elemento = document.getElementById("changecolor");
setInterval(function() {
    elemento.style.color = elemento.style.color === "red" ? "blue" : "red";

}, 2000)