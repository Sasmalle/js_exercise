/*Aggiungere un event listener 
al cambio di selezione di un elemento select:*/
const select = document.getElementById('select');
select.addEventListener('change',function(){
    console.log(select.value);
});