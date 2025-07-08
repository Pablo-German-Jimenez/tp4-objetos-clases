/*Ejercicio 4:  Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Calcula la calificación más alta del alumno y clasifica al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).
 */

const student = {
  name: "German",
  grade: "Software Engineering",
  califications: [6, 8, 9],
};

function addCalifications(student, note) {
  const max = Math.max(...student.califications);
  console.log(max);
  let clasifications = "";
  if (max >= 9) {
    clasifications = "A";
  } else if (max >= 7) {
    clasifications = "B";
  } else if (max >= 5) {
    clasifications = "C";
  } else {
    clasifications = "D";
  }

  console.log(
    `The better note of ${student.name} is ${max}, and his clasifications is: ${clasifications}`
  );
}

addCalifications(student, student);
