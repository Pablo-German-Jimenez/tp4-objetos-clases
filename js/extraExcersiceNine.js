/*

9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

*/

class Animal {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  get getName() {
    return this.#name;
  }
  get getAge() {
    return this.#age;
  }

  set settName(setName) {
    return (this.#name = setName);
  }
  set settAge(setAge) {
    return (this.#age = setAge);
  }
}

class Dog extends Animal {
  constructor(name, age, actionDog) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.actionDog = actionDog;
  }
  makeSound(){
    console.log(`The doggy : ${this.name} is ${this.actionDog} and just is ${this.age} years old! OMG! :P`)
  }
}

class Cat extends Animal{
    constructor(name,age,actionCat){
        super(name,age)
        this.name = name;
        this.age = age;
        this.actionCat = actionCat;
    }

    likeATiger(){
        console.log(`The Kitty named ${this.name} is crazy and say ${this.actionCat} and just is ${this.age} years old`)
    }
}
const perrito = new Dog('Baltor',5,'barkin!')
const gatito = new Cat('Bagheera',3,'Meoww!')
perrito.makeSound()
gatito.likeATiger()
