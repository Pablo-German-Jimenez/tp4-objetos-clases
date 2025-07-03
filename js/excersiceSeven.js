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


class Contact{
    #name ; #phone;
    constructor(name, phone){
        this.#name = name;
        this.#phone = phone;
        
    isEqual(otherContact){
         if (this.name.toLowerCase()===otherContact.this.name.toLowerCase()) {
          document.writeln(`The contact ${this.name} if equal to ${otherContact}`)}
    }
    }
}

class Schedule{
        constructor(size=10){
        this.size = size;
        this.contacts = [];
    }
    get getName(){return this.name}
    get getPhone(){return this.phone}

    set setName(newName){return  this.name = newName}
    set setNumberPhone(newPhoneNumber){ return this.phone = newPhoneNumber}

    addContact(contact){
        if(this.isFull){
            alert(`the schedule is full!`);
            console.log(`the schedule is full!`);
            return
        }
   
       this.contactExist.push(contact);
       alert(`Contact added`);
       console.log(`Contact added`);
    }

    contactExist(){
     if(this.contactExist(contact)){
            alert(`The contact exist`);
            console.log(`The contact exist`);
            return
        };
}
    
    listContact(){
            if(this.contacts.length ===0){
            alert(`Empty Schedule`);
            console.log(`Empty Schedule`);
            }else{
            console.log(`Contact in the schedule`)
            this.contacts.forEach(c => console.log())
                                    };
                }
}
            
  

Contact.contactExist
 */




