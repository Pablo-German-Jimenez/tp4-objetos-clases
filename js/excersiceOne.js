/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/
const car = {
  price: 2000000,
  model: 2020,
  brand: "Honda Civic",
  motor: "2.4l",
  transmision: "Automatic CVT",
  //métodos:
  turnOn: function (){
    document.writeln(`<h1 class="text-success">Car ready!🔥 brrr brbr!!🔥<br></h1>`)
  },
  turnOff: function(){
    document.writeln(`<h2 class="text-danger">Turn off the ship!</h2>`)
  }
};
// modify key and value to object:
car.frenos= 'Disc Brackets';
car.color = 'champagne';

// call class object
car.turnOn();
car.turnOff();
console.log(car.turnOn());
document.querySelector('.car-champagne').innerHTML=`<h3 class="text-primary"><i class="bi bi-car-front-fill text-danger fs-1"></i> The better car brake for cars is: <span class='text-secondary'>${car.frenos}</span>, and the most beatiful color is the <span class="car-champagne">${car.color}</span></h3> `


