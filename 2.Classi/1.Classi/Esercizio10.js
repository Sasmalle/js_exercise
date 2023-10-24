/*Creare una classe "Triangolo" con proprietà base e altezza, 
e un metodo per calcolare l'area.*/
class Triangolo {
    constructor(base, altezza){
        this.base = base;
        this.altezza = altezza;
    }
    calcoloArea(){
        return (this.base*this.altezza)/2;
    }
}

const triangolo1 = new Triangolo(2,3);
console.log(triangolo1.calcoloArea());