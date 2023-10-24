/*Scrivi un programma 
che stampi sulla console tutte le proprietà di un oggetto.*/

let famiglia={
    mamma: "Sara",
    papà:"Ste",
    bambino:"Marco"
};

for (let elementi in famiglia){
    console.log(elementi+":"+famiglia[elementi]);
}
