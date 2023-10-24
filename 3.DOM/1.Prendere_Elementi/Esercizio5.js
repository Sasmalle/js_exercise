/*Ottenere tutti gli elementi che corrispondono a un selettore CSS 
e nasconderli.*/
const elementic = document.querySelectorAll("#mioElemento");
elementic.forEach((elemento) => {
  elemento.style.display = "none";
});