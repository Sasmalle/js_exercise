/*Aggiungere un event listener 
al cambio di valore di un elemento input di tipo range:*/
const range = document.getElementById('range');
range.addEventListener('input',function() {
    console.log(range.value);
});
