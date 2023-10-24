/*Scrivi un programma 
che calcoli la somma dei valori delle proprietà numeriche di un oggetto.*/
const spese = {
    cibo: 50,
    trasporti: 30,
    affitto: 500,
    utenze: 500,
  };
  let risultato = 0
for(element in spese){
    risultato = risultato + spese[element];
}
console.log(risultato);