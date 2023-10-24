/*Definire una funzione che accetta un array e un callback, 
e richiama il callback per ogni elemento dell'array:*/
function chiamaArray(array, callback){
    for(let element of array){
        callback(element);
    }

}

function mioCallback(element) {
    console.log("elemento: "+ element);
  };

chiamaArray([1,2,3,9],mioCallback);
