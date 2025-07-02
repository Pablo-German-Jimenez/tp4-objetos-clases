/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/




class Person {

  constructor(name, age, id, gender, height, weight, birthYear) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.birthYear = birthYear;
  }

  showGeneration() {
    let generation, trait;

    if (this.birthYear >= 1930 && this.birthYear <= 1948) {
      generation = "Silent Generation";
      trait = "austerity";
    } else if (this.birthYear >= 1949 && this.birthYear <= 1968) {
      generation = "Baby Boom";
      trait = "ambition";
    } else if (this.birthYear >= 1969 && this.birthYear <= 1980) {
      generation = "Generation X";
      trait = "obsession with success";
    } else if (this.birthYear >= 1981 && this.birthYear <= 1993) {
      generation = "Millennials";
      trait = "frustration";
    } else if (this.birthYear >= 1994 && this.birthYear <= 2010) {
      generation = "Generation Z";
      trait = "irreverence";
    } else {
      generation = "Unknown";
      trait = "N/A";
    }

    return document.writeln(
      `<h1 class='text-danger'>${this.name} belongs to the ${generation}, characterized by ${trait}.</h1>`
    );
  }

  isOfLegalAge() {
    return document.writeln(
      `<h2 class='text-success'>${this.name} is ${this.age >= 18 ? "an adult" : "a minor"}.</h2>`
    );
  }

  showData() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`ID: ${this.id}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Height: ${this.height}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Year of Birth: ${this.birthYear}`);
  }

  generateID() {
    this.id = Math.floor(Math.random() * 100000000);
    return document.writeln(`<h3 class="text-primary">Id generated randomly :${this.id}</h3>`);
  }
}


const newPerson = new Person('German', 35,'37444555' , 'Male', '1.65m', '63kg', 1989);


newPerson.showGeneration();
newPerson.showData();
newPerson.isOfLegalAge();
newPerson.generateID();