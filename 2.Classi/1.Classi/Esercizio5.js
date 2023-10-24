/*Creare una classe "Studente" con proprietà nome, cognome 
e un array di voti. 
Aggiungere un metodo "aggiungiVoto" alla classe "Studente" 
che permetta di aggiungere un voto all'array dei voti.*/
class Studente {
    constructor(nome, cognome, voti){
        this.nome = nome;
        this.cognome = cognome;
        this.voti = voti;
    }
    aggiungiVoto(voto){
        this.voti.push(voto); 
    }
}

const alessandro = new Studente("Alessandro", "Piccolo", [5,6,7,5,9,10]);
alessandro.aggiungiVoto(4);
console.log(alessandro.voti);