/*Utilizzare Promise.race per ottenere il risultato della promise più veloce:*/
const promess1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Promessa 1 risolta");
    }, 2000);
  });
  
  const promess2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Promessa 2 risolta");
    }, 1000);
  });
  
  Promise.race([promess1, promess2])
    .then(function (risultato) {
      console.log(risultato);
    })
    .catch(function (errore) {
      console.log(errore);
    });