/*Creare una classe "Animale" con metodo "verso". 
Successivamente, creare una classe "Gatto" 
che erediti dalla classe "Animale" 
e sovrascriva il metodo "verso" per restituire il verso del gatto.*/
class Animales{
    verso() {
        return "Sconosciuto";
    }
}
class Gatto extends Animales{
    verso() {
        return "Miao";
    }
}
const gatto1 = new Gatto();
console.log(gatto1.verso());
