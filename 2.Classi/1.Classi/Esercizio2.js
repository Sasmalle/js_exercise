/*Creare una classe "Automobile" con proprietà marca e anno di produzione.
Aggiungere un metodo "dettagli" alla classe "Automobile" 
che stampi i dettagli della vettura.*/

class Automobile{
    constructor(marca, anno){
        this.marca = marca;
        this.anno = anno;
    }
    dettagli(){
        console.log(`${this.marca}, ${this.anno}`);
    }
}

const auto = new Automobile("Merchedes", 2022);
auto.dettagli();
