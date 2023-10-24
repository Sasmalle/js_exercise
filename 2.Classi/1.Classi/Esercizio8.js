/*Creare una classe "Rettangolo" con proprietà base e altezza, 
e un metodo per calcolare l'area.*/
class Rettangolo{
    constructor(base,altezza){
        this.base = base;
        this.altezza = altezza;
    }

    calcoloArea(){
        return this.base*this.altezza;
    }
}

const rettangolo1 = new Rettangolo(3,2);
console.log(rettangolo1.calcoloArea());
