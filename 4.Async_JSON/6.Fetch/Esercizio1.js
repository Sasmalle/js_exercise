/*Eseguire una richiesta GET e ottenere i dati da un'API.*/
const URL = "https://jsonplaceholder.typicode.com/todos/1";
fetch(URL)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log("Errore", error));
