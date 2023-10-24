/*Conta il numero di proprietà presenti nell'oggetto "persona" 
e stampa il conteggio in console.*/
const person = {
    nome: "Mario",
    eta: 30,
    sesso: "Maschio",
  };
  
  const conteggioProprieta = Object.keys(person).length;
  
  console.log(conteggioProprieta);