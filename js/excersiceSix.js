/*Libros - Dificultad:  
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
⦁	ISBN
⦁	Título
⦁	Autor
⦁	Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Book{
    #title ;#ISBN ;#author;#pageNumber
    constructor(ISBN,title,author,pageNumber){
        this.ISBN = ISBN;
        this.title= title;
        this.author=author;
        this.pageNumber=pageNumber;
    }
    get gettitle(){ return this.#title}
    get getIsbn(){ return this.#ISBN}
    get getAuthor(){return this.#author}
    get getNumber(){ return this.#pageNumber}

    set setTitle(newTitle){return this.#title = newTitle }
    set setIsbn(newIsbn){ return this.#ISBN = newIsbn}
    set setAuthor(newAuthor){ return this.#author = newAuthor}
    set setPageNumber(newPageNumber){ return this.#pageNumber = newPageNumber}

    showBook(){
        document.writeln(`<p>The Book ${this.title}, with ISBN:${this.#ISBN}, created by the author ${this.author}, and has<b>${this.pageNumber}</b> pages </p>`)
    }
}

class TheAlquimist extends Book{
    constructor(ISBN,title,author,pageNumber){}
}


console.log(Book.gettitle)