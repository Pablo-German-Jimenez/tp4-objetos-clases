/*Ejercicio 2: Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa prompt para ingresar los datos de los estudiantes.*/


const students = [
  { name: "Student 1", note: 10 },
  { name: "Student 2", note: 6 },
  { name: "Student 3", note: 4 }
];

function calculateAverage(students) {
  const sum = students.reduce((acc, student) => acc + student.note, 0);
  return (sum / students.length)
}

console.log(`The calculate average of ${calculateAverage(students)}`);
