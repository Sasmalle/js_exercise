/*Creare un pulsante che aumenta di 1 ogni volta che viene cliccato 
utilizzando setInterval:*/
const pulsante = document.getElementById('pulsante');
let conts = 0;

pulsante.addEventListener("click", function () {
    conts++;
  });

setInterval(function () {
    pulsante.textContent = conts;
}, 500);