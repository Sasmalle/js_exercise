/*Aggiungere un event listener al cambio di un input di testo:*/
const input = document.getElementById("inputText");
input.addEventListener("input",function() {
    console.log(input.value);
});