/*Scrivi una arrow function che prenda una parola come parametro 
e restituisca true se la parola è palindroma, 
altrimenti restituisca false.*/

const palindroma = (parola) => {
    for (let i = 0; i <Math.floor(parola.length / 2); i++) {
        p1= parola[parola.length - 1 - i];
        p2 =parola[i]
        if (p1!==p2){
            return false;
        }
    }
    return true
}; 
let parola = "racecar"
console.log(palindroma(parola));
