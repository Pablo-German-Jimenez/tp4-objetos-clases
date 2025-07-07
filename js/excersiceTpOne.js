/*Ejercicio 1: Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings). Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.
 */

const person = {
  name: prompt("Name:"),
  age: parseInt(prompt("Age:")),
  hobbies: prompt("Enter your hobbies, separated by commas:")
    .split(",")
    .map((h) => h.trim()),
};

function addHobby(person, hobby) {
  person.hobbies.push(hobby);
}

const newHobby = prompt("Add a new hobby:");
addHobby(person, newHobby);

console.log(`Hobbies of ${person.name}:`);
person.hobbies.map((hobby) => console.log("- " + hobby));
