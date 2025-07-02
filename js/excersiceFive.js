/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.


class Persona{
    constructor(nombre,edad,DNI,sexo,peso,altura,anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.DNI=DNI;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;
    }
    mostrarGeneracion(){
        
        if(this.edad>=1930&&this.edad<=1948){
            console.log(`${this.name} pertenece a los Silent Generation, con rasgos de Austeridad`)
        }else if(this.edad>=1949&&this.edad<=1968){
            console.log(`${this.name} pertenece a los Baby Boom, con rasgos de Ambisión!`)
        }else if(this.edad>=1969&&this.edad<=1980){
            console.log(`${this.nombre} pertenece a la Generación X, con rasgos de obsesión por el éxito`)
        }
    }
    esMayorDeEdad(){}
    mostrarDatos(){}
    generaDNI(){}


};

const Bboy = new Persona('german',,132105,'masculino')
console.log(Bboy.mostrarGeneracion());

*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generaDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacion, rasgo;

    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Silent Generation";
      rasgo = "austeridad";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgo = "ambición";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgo = "obsesión por el éxito";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Millennials";
      rasgo = "frustración";
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgo = "irreverencia";
    } else {
      generacion = "Desconocida";
      rasgo = "N/A";
    }

   return  console.log(`${this.nombre} pertenece a la ${generacion}, cuyo rasgo característico es la ${rasgo}.`);
  }

  esMayorDeEdad() {
   return console.log(`${this.nombre} ${this.edad >= 18 ? "es mayor de edad" : "no es mayor de edad"}.`);
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso} kg`);
    console.log(`Altura: ${this.altura} m`);
    console.log(`Año de nacimiento: ${this.anioNacimiento}`);
  }

  generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }
}


Persona.mostrarGeneracion;


