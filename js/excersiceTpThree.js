/*Ejercicio 3: Crea un objeto libro que tenga propiedades título, autor, año y género. Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. Usa prompt para ingresar los datos de los libros y el género.*/

const books = [];

for (let i = 0; i < 3; i++) {
  const title = prompt(`Title of book ${i+1}:`);
  const author = prompt(`Author:`);
  const year = +prompt(`Creation year:`);
  const genre = prompt(`Genre:`);

  books.push({ title, author, year, genre });
}

const genreSearch = prompt("Write the genre to filter:");

const filterByGenre = (arr, genreSearch) => arr.filter(book => book.genre === genreSearch);

console.log(filterByGenre(books, genreSearch));