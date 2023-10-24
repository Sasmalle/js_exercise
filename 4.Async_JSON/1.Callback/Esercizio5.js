/*Utilizzare un callback per ordinare un array di oggetti:*/
const persone = [
    { nome: "Alice", eta: 25 },
    { nome: "Bob", eta: 30 },
    { nome: "Charlie", eta: 20 },
  ];

function confrontaeta(a,b) {
    return a.eta - b.eta
}

persone.sort(confrontaeta);
console.log(persone);