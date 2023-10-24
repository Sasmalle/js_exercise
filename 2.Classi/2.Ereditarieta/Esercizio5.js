/*Creare una classe "Veicolo" con metodo "accelera". 
Successivamente, creare una classe "Automobile" 
che erediti dalla classe "Veicolo" 
e abbia un metodo "suonaClacson" oltre al metodo "accelera".*/

class Veicolos {
    accellera(){
        console.log("veicolo accellera...");
    }
}

class Automobiles extends Veicolos {
    accellera(){
        console.log("...il veicolo accellera...");
    }
    suonaClacson(){
        console.log("...il clacson suona...");
    }
}
const auto = new Automobiles();
auto.suonaClacson();
auto.accellera();