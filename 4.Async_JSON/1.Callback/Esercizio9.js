/*Utilizzare un callback 
per eseguire un'azione su ogni carattere di una stringa:*/
const stringa = "Ciao";
function stampaChar(char){
  console.log(char);
}
Array.from(stringa).forEach(stampaChar);