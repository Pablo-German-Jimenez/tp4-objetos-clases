/*Ejercicio 2: Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa prompt para ingresar los datos de los estudiantes.*/


let student = [];
let numStudents = parseInt(prompt("¿How many students do you want to add?"));
let sumNotes = 0;

for (let i = 0; i < numStudents; i++) {
    let name = prompt(`Insert the name of student ${i + 1}:`);
    let note = parseFloat(prompt(`Insert the of ${name}:`)); 
    student.push({ name: name, note: note });
    sumNotes += note; }
if (numStudents > 0) {
    averageNote = sumNotes / numStudents;
}

console.log(`The average of students is : ${averageNote}`);