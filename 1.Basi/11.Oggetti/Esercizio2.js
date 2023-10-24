/*Itera sulle proprietà di un oggetto "persona" 
e stampa ogni chiave e valore corrispondente in console.*/
const personaa = {
    nome: "Mario",
    eta: 30,
    sesso: "Maschio",
};
for (let item in personaa) {
    console.log(item + ":"+ personaa[item]);
}

