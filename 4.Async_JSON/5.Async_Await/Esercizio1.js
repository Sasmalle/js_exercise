/*Creare una promise che si risolve dopo 2 secondi:*/
const promessa = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Promessa risulta")
    }, 2000);
});

promessa.then(function(risultato){
    console.log(risultato);
})