/*Crea una copia dell'oggetto "persona" in un nuovo oggetto "personaCopia" 
e stampa entrambi gli oggetti in console.*/
const personas = {
    nome: "Mario",
    eta: 30,
  };

const personasCopia = Object.assign({}, personas);
console.log(personas);
console.log(personasCopia);
  
