/*Creare una classe "Cerchio" con proprietà raggio 
e un metodo per calcolare l'area.*/
const pi = 3.14
class Cerchio{
    constructor(raggio){
        this.raggio = raggio;
    }
    calcoloArea(){
        return (Math.pow(this.raggio, 2))*pi;
    }
}

const cerchio1 = new Cerchio(5);
console.log(cerchio1.calcoloArea());
