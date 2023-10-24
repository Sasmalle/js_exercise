/*Ottenere un elemento per classe e modificare il suo stile.*/
const elementi = document.getElementsByClassName("mioElementos");
for (let i = 0; i < elementi.length; i++) {
  elementi[i].style.color = "red";
}