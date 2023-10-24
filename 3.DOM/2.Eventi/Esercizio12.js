/*Aggiungere un event listener 
al passaggio del mouse fuori da un elemento:*/
const elements = document.getElementById('elements');
elements.addEventListener('mouseout',function () {
    console.log("Il mouse è uscito dall'elemento");
  });
