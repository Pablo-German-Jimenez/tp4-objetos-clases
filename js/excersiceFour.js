/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Product{
    constructor(codigo,nombre,precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }

    printData(){
        console.log(`Código: ${this._codigo}, nombre del producto: ${this._nombre}, precio: ${this._precio}`);
    }
};
const arrayObjets = [];

const productOne = new Product(66601,'Bitcoin Miner','$15000');
arrayObjets.push(productOne);
console.log(arrayObjets)
const productTwo = new Product(987456,'Lamborghini','850.000' );
arrayObjets.unshift(productTwo)
console.log(arrayObjets)
const productThree = new Product(76512,'Ferrari','$300000');
arrayObjets.push(productThree);
console.log(arrayObjets)


console.log(arrayObjets.forEach(element => {
    element.printData()
}));








//cLass trainning :
/*class Player{
    constructor(nombre,colorSombrero){
        this._nombre=nombre;
        this._colorSombrero = colorSombrero;
    }
    saltart(){}
    correr(){}
    saludar(){
        return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }
    
get nombre(){
    return this._nombre;
}
set nombre(nuevoNombre){
    this._nombre = nuevoNombre;
}
}

let player1 = new Player('BBoy','ROJO');
let player2 = new Player('Linkin','VERDE');

//get
console.log(player1.nombre)
//set
player1.cambiarNOmbre = 'Linkin';
console.log(player1.nombre)



//creacion de subclase

class Pet extends Player{
    constructor(nombre,colorSombrero,colorPiel){
        super(nombre,colorSombrero);
        this._colorPiel = colorPiel;
    }
    get colorPiel(){
        return this._colorPiel;
    }
    set colorPiel(nuevoColorPiel){
        this._colorPiel = nuevoColorPiel;
    }
}

let pet1 = new Pet('Yoshi','invisible','verde');
console.log(pet1)

pet1.cambiarNOmbre = 'Breaker';
console.log(pet1.nombre);*/