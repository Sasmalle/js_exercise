/*Aggiungere un event listener al submit di un modulo:*/
const submit = document.getElementById('submitModulo');
submit.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("modulo inviato")

})
