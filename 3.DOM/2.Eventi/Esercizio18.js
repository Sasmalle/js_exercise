/*Aggiungere un event listener 
al cambio di valore di una casella di controllo (checkbox):*/
const checkbox = document.getElementById("miaCheckbox");
checkbox.addEventListener("change", function () {
  console.log(checkbox.checked);
});