/*Creare un effetto di animazione 
che fa apparire gradualmente un elemento dopo 1 secondo 
utilizzando setTimeout:*/
const appare = document.getElementById('appareGradualmente');
appare.style.opacity = "0";
setTimeout(function() {
    appare.style.opacity = "1";
}, 1000);