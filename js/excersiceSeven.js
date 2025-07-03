/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

⦁	aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
⦁	existeContacto(Contacto): indica si el contacto pasado existe o no.
⦁	listarContactos(): Lista toda la agenda
⦁	buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
⦁	eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
⦁	agendaLlena(): indica si la agenda está llena.
⦁	huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Schedule{
    #name ; #numberPhone
    constructor(name, numberPhone){
        this.name = name;
        this.numberPhone = numberPhone;
    }
    get getName(){return this.#name}
    get getNumberPhone(){return this.#numberPhone}

    set setName(newName){return  this.#name = newName}
    set setNumberPhone(newPhoneNumber){ return this.#numberPhone = newPhoneNumber}

    isEqual(otherContact){
         if (this.name.toLowerCase()===otherContact.this.name.toLowerCase()) {
          document.writeln(`The contact ${this.name} if equal to ${otherContact}`)}
    }
    addContact(){

    }
    contactExiste(){}
    scheduleList(){}
    searchContact(){}
    deleteContact(){}
    fullSchedule(){}
    freeSpaces(){}
}
 




