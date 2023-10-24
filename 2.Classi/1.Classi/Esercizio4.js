/*Creare una classe "Libro" con proprietà titolo e autore. 
Aggiungere un metodo "dettagli" alla classe "Libro" 
che stampi i dettagli del libro.*/
class Libro {
    constructor(titolo, autore){
        this.titolo = titolo;
        this.autore = autore;
    }

    dettagli(){
        console.log(`${this.titolo}, ${this.autore}`);
    }
}

const harryPotter = new Libro("Harry Potter", "JK Rowling");
harryPotter.dettagli();