/*Creare una classe "Utente" con proprietà nome, cognome 
e un metodo per generare l'indirizzo email.*/
class Utente {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    generaEmail(){
        const email=`${this.nome.toLowerCase()}.${this.cognome.toLowerCase()}@gmail.com`;
        return email;
    }
}

const marioRossi = new Utente("Mario", "Rossi");
console.log(marioRossi.generaEmail());
