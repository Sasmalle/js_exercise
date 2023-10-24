/*Creare una classe "Forma" con metodo "calcolaArea". 
Successivamente, creare una classe "Rettangolo" 
che erediti dalla classe "Forma" e abbia proprietà "base" e "altezza" 
e implementi il metodo "calcolaArea" per calcolare l'area del rettangolo*/

class Forma{
    calcolaArea(){
        return 0;
    }
}
class Rettangolo extends Forma{
    constructor(base, altezza){
        super();
        this.base = base;
        this.altezza = altezza;
    }
    calcolaArea(){
        return this.base*this.altezza;
    }
    
}
const ret1 = new Rettangolo(4,5);
console.log(ret1.calcolaArea());
