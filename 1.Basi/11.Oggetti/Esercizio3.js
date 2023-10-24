/*Verifica se l'oggetto "persona" ha la proprietà "sesso" 
e stampa un messaggio appropriato in console.*/
const personaas = {
    nome: "Mario",
    eta: 30,
    sesso: "Maschio",
};
let ce = false;

if("sesso" in personaas){
        ce = true;
}
console.log(ce);