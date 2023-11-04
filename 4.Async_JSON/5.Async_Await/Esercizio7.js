/*Utilizzare le promise per caricare dati da una risorsa esterna:*/
function caricaDati(){
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(function(response){
                if (response.ok){
                    resolve(response.json());
                }
                else{
                    reject("errore di caricamento dati");
                }
            })
            .catch(function(error){
                reject(error)
            })
    })
}
caricaDati()
    .then(function(dati){
        console.log(dati)
    })
    .catch(function(errore){
        console.log(errore);
    });