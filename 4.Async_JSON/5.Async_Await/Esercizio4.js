/*Gestire il caso in cui una promise venga risolta o rifiutata immediatamente:*/
const prom = new Promise (function(resolve, reject){
    resolve("Promessa risolta subito");
    reject("Promessa rifiutata subito");
})

prom.then(function(risposta){
    console.log(risposta)
});
prom.catch(function(errore){
    console.log(errore)
});