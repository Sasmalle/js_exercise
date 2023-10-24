/*Simulare una chiamata asincrona 
utilizzando un setTimeout e un callback:*/
function chiamataAsincrona(callback) {
    setTimeout(function () {
      callback("Risposta");
    }, 2000);
  }
  
  function mioCallback(risposta) {
    console.log(risposta);
  }
  
  chiamataAsincrona(mioCallback);
