/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
⦁	Una propiedad titular con el valor "Alex".
⦁	Una propiedad saldo, teniendo como valor inicial 0.
⦁	Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
⦁	Un método extraer() que permita retirar la cantidad pasada como parámetro.
⦁	Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos*/

/*const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(cantidad) {
        this.saldo += cantidad;
    },
    extraer(cantidad) {
        this.saldo -= cantidad;
    },
    informar() {
        document.writeln( `Titular: ${this.titular}, Saldo: $${this.saldo}`);
    }
};

// Uso del objeto
console.log(cuenta.informar()); // Muestra: Titular: Alex, Saldo: $0
cuenta.ingresar(500);
console.log(cuenta.informar()); // Muestra: Titular: Alex, Saldo: $500
cuenta.extraer(150);
console.log(cuenta.informar()); // Muestra: Titular: Alex, Saldo: $350*/
const saldo = document.querySelector('.saldo');
const cantidad = [];

const account = {
    Titulo: 'Alex',
    saldo: 0,
    ingresar: function(cantidad){
        cantidad = parseInt(prompt(`cuanto depositar?`))
        console.log((typeof(cantidad)))
        if(!isNaN(cantidad)){
        this.saldo =+ this.saldo+cantidad;
        saldo.innerHTML = ` Su saldo es: ${this.saldo}`
        }
    },
    extraer: function(cantidad){
        cantidad = parseInt(prompt(`Cuanto dinero quieres extraer?`))
        this.saldo= this.saldo-cantidad
        console.log(`El importe actual de tu saldo es de ${this.saldo}`)

    },
    informar: function(cantidad){
        alert(`EL valor total es de ${this.cantidad}`)


    },
}


do{
account.ingresar()
}while(confirm(`Add more numbers?`))

account.extraer()

account.informar()