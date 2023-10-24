/*Creare una classe "Punto" con proprietà x e y, 
e un metodo per calcolare la distanza dal punto all'origine.*/
class Punto {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    calcolaDistanza(){
        const distanza = Math.sqrt(this.x * this.x + this.y * this.y);
        return distanza;
    }
}

const a = new Punto(3,4);
console.log(a.calcolaDistanza());
