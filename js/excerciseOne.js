/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/
const car = {
  price: 2000000,
  model: 2020,
  brand: "honda",
  motor: "2.4l",
  transmision: "Automatic CVT",
  //métodos:
  turnOn: function (){
    document.writeln(`<h1 class="text-success">Car ready! brrr brbr!!<br></h1>`)
  },
  turnOff: function(){
    document.writeln(`<h2 class="text-danger">Turn off the ship!</h2>`)
  }
};
// modify key and value to object:
car.frenos= 'Disc Brackets';

// call class object
car.turnOn();
car.turnOff();
console.log(car.turnOn());
document.writeln(`<h3 class="text-primary">The better disc brackets for cars is:  ${car.frenos}</h3> `)

