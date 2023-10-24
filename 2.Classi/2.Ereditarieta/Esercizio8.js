/*Creare una classe "Forma" con metodo "calcolaArea". 
Successivamente, creare una classe "Cerchio" 
che erediti dalla classe "Forma" e abbia una proprietà "raggio" 
e implementi il metodo "calcolaArea" per calcolare l'area del cerchio.*/
class Formas {
    calcolaArea() {
        return 0;
    }
}

class Cerchio extends Formas {
    constructor(raggio) {
        super();
        this.raggio = raggio;
    }

    calcolaArea() {
        const pi = Math.PI;
        return pi * Math.pow(this.raggio, 2);
    }
}

const cerchio = new Cerchio(2);
console.log(cerchio.calcolaArea().toFixed(2));