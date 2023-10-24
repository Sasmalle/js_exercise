/*Creare un effetto di animazione 
che sposta un elemento gradualmente orizzontalmente 
utilizzando setInterval:*/
const animation = document.getElementById('animationElement');
let posizione = 0;
setInterval(function() {
    posizione += 10;
    animation.style.transform = `translateX(${posizione}px)`;
    if (posizione >= 200) {
        clearInterval(intervallo);
      }
}, 100);