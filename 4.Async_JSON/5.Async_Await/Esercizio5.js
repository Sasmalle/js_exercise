/*Utilizzare Promise.all per eseguire più promise contemporaneamente:*/
function eseguiChiamata(numero){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(`Chiamata ${numero} risolta`);
        }, 500)
    })
}

const pro1= eseguiChiamata(1);
const pro2= eseguiChiamata(2);
const pro3= eseguiChiamata(3);
const pro4= eseguiChiamata(4);

Promise.all([pro1,pro2,pro3,pro4])
    .then(function(risultati){
        console.log(risultati)
    })
    .catch(function(errore){
        console.log(errore);
    })