/*Simulare un countdown da 5 a 0 utilizzando setInterval:*/
let cont = 5;

const int = setInterval(function(){
    console.log(cont);
    if (cont==0){
        clearInterval(int);
        console.log("Countdown terminato");
    }
    cont --;
}, 1000);