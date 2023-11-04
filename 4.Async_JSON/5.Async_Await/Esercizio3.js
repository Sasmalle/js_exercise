/*Eseguire una serie di chiamate asincrone in sequenza utilizzando le promise:*/
function eseguiChiamate(numero){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(`Chiamata ${numero} completata`);
        }, 1000)
    })
}
eseguiChiamate(1)
    .then(function(risposta){
        console.log(risposta);
        return eseguiChiamate(2)
    })
    .then(function(risposta){
        console.log(risposta);
        return eseguiChiamate(3)
    })
    .then(function(risposta){
        console.log(risposta);
        return eseguiChiamate(4)
    })
    .catch(function(errore){
        console.log(errore);
    })