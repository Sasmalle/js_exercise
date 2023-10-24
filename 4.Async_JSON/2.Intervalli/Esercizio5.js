/*Creare una presentazione di slide 
che cambiano automaticamente ogni 3 secondi utilizzando setInterval:*/
const slides = ["Slide 1", "Slide 2", "Slide 3"];
let contas = 0;
setInterval(function(){
    if (contas==slides.length){
        contas=0;
    }
    console.log(slides[contas])
    contas++;
}, 3000);