/*Creare una classe "Prodotto" con proprietà nome, prezzo 
e un metodo per applicare uno sconto al prezzo.*/
class Prodotto{
    constructor(nome, prezzo){
        this.nome = nome;
        this.prezzo = prezzo;
    }

    applicaSconto(scontoPer){
        const sconto = (this.prezzo * scontoPer) / 100;
        return this.prezzo -= sconto;
    }
}

const lavatrice = new Prodotto("lavatrice", 300);
console.log(lavatrice.applicaSconto(50));
