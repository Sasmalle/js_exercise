/*Utilizzare un callback 
per simulare la gestione degli errori in una finta chiamata asincrona:*/
function eseguiChiamata(callbackSuccesso, callbackErrore) {
  const esito = Math.random() <0.5;
  if (esito){
    callbackSuccesso("Chiamata Riuiscita");
  }
  else{
    callbackErrore("Errore");
  }
}

function callbackSuccesso(risposta) {
  console.log(risposta);
}

function callbackErrore(risposta) {
  console.log(risposta);
}

eseguiChiamata(callbackSuccesso, callbackErrore)
