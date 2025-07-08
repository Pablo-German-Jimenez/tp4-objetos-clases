/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
⦁	Una propiedad titular con el valor "Alex".
⦁	Una propiedad saldo, teniendo como valor inicial 0.
⦁	Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
⦁	Un método extraer() que permita retirar la cantidad pasada como parámetro.
⦁	Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/
const amounts = [];

const account = {
    title: 'Alex',
    balance: 0,
    deposit: function(amount) {
        const balanceElement = document.querySelector('.balance');
        amount = parseInt(prompt(`How much would you like to deposit?`));
        console.log(typeof amount);
        if (!isNaN(amount)) {
            this.balance += amount;
            balanceElement.innerHTML = `Your balance is: ${this.balance}`;
        }
    },
    withdraw: function(amount) {
        amount = parseInt(prompt(`How much money do you want to withdraw?`));
        this.balance -= amount;
        console.log(`The current balance is ${this.balance}`);
    },
    report: function() {
        alert(`The total value is ${this.balance}`);
    }
};

do {
    account.deposit();
} while (confirm(`Add more numbers?`));

account.withdraw();
account.report();
