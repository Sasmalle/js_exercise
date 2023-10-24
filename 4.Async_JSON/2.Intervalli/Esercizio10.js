/*Cambiare lo sfondo della pagina ogni 5 secondi utilizzando setInterval:*/
const colori = ["red", "green", "blue"];
let i = 0;

const intervallos = setInterval(function(){
    document.body.style.backgroundColor = colori[i];
    indice++;
    if (indice==colori.length){
        indice = 0;
    }
    },5000);