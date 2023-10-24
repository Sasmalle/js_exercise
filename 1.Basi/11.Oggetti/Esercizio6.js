/*Crea un oggetto "libro" con proprietà come "titolo", "autore" 
e un oggetto annidato "editore" con le proprietà "nome" e "anno".*/
const libro = {
    titolo:"Harry Potter" ,
    autore:"JK Rowling", 
    editore: {
        nome:"Mondadori",
        anno: 2001
    }
};

console.log(libro);