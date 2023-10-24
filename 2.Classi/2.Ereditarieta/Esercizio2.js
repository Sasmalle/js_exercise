/*Creare una classe "Animale" con proprietà "nome" 
e un metodo "verso" che restituisca il verso dell'animale. 
Successivamente, creare una classe "Cane" 
che erediti dalla classe "Animale" 
e abbia una proprietà aggiuntiva "razza".*/

class Animale {
    constructor(nome){
        this.nome = nome;
    }
    faiVerso(){
        return "Sconosciuto";
    }
}
class Cane extends Animale {
    constructor(nome, razza){
        super(nome);
        this.razza = razza;
    }
    faiVerso(){
        return "Bau Bau";
    }
}
const cane = new Cane ("Alex", "Labrador");
console.log(cane.nome,cane.razza,cane.faiVerso())