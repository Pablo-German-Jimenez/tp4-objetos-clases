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
        document.writeln(`<p class="text-success">The Book <b>"${this.title}"</b>, with ISBN: <b>"${this.ISBN}"</b>, created by the author <b>"${this.author}"</b>, and has: <b>"${this.pageNumber}"</b> pages </p>`)
    }
}

class TheAlquimist extends Book{
    constructor(ISBN,title,author,pageNumber){
        super(ISBN,title,author,pageNumber)
            this.getIsbn = ISBN;
            this.gettitle = newTitle;
            this.getAuthor= newAuthor;
            this.getNumber = newPageNumber;
        }
  }

const bookTheAlquimist = new Book('9','The Alquimist','Paulo Coehlo','190')
const TheSecret = new Book('8','The Secret:The Law Atraction','Rhonda Byrne','261')


bookTheAlquimist.showBook()
TheSecret.showBook()

const pagesAlquimist = parseInt(bookTheAlquimist.pageNumber);
const pagesSecret = parseInt(TheSecret.pageNumber);

if (pagesAlquimist > pagesSecret) {
  document.writeln(`<p class="text-danger">"${bookTheAlquimist.title}" has more pages (${pagesAlquimist}) than "${TheSecret.title}" (${pagesSecret}).</p>`);
} else if (pagesSecret > pagesAlquimist) {
  document.writeln(`<p class="text-danger">"${TheSecret.title}" has more pages (${pagesSecret}) than "${bookTheAlquimist.title}" (${pagesAlquimist}).</p>`);
} else {
  document.writeln(`<p class="text-danger">Both books have the same number of pages: ${pagesAlquimist}.</p>`);
}



