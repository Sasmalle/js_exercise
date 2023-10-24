/*Scrivi un programma 
che confronti le proprietà di due oggetti
e stampi sulla console se le proprietà corrispondenti 
hanno lo stesso valore. */

const oggetto1 = {
    nome: "Mario",
    età: 30,
    professione: "Ingegnere",
  };
  
  const oggetto2 = {
    nome: "Luigi",
    età: 30,
    professione: "Architetto",
  };

  for (let i in oggetto1){
    for(let a in oggetto2){
        if(a==i){
            let uguale = oggetto1[i]==oggetto2[i];
            console.log(uguale);
        }
    }
  }