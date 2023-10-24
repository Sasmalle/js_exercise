/*Scrivi un programma 
che utilizzi un template literal 
per creare una lista HTML con elementi dinamici 
e stampi il risultato sulla console.*/
let list = 10
console.log("<ul>");
for (let i = 0; i < list; i++) {
    console.log(
        `<li>${i}</li>`
    )
}
console.log("</ul>");