/*Creare una promise che viene rifiutata dopo 3 secondi:*/
const promes = new Promise(function(resolve,reject){
    setTimeout(() => {
        reject("promessa rifiutata");
    }, 3000);
});
promes.catch(function(errore){
    console.log(errore);
})