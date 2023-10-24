/*Aggiungere un event listener al focus su un campo di input:*/
const campoInput = document.getElementById('input');
campoInput.addEventListener('focus', function(){
    console.log("Hai dato il focus all'input");
});