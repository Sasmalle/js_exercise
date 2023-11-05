/*Eseguire una richiesta POST per inviare dati a un'API:*/
const dati={
    nome:"Mario",
    cognome:"Rossi",
};
const URL = "https://api.example.com/dati";
fetch(URL,{
    method: "POST",
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify(dati),
})
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log("Errore", error));
    
