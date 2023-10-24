/*Ottenere elementi per tag e aggiungere loro una classe.*/
const elementie = document.getElementsByTagName("p");
for (let i = 0; i < elementie.length; i++) {
  elementie[i].classList.add("mioStile");
}