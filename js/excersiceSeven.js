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

class Contact{
    #name ; #phone
    constructor(name, phone){
        this.#name = name;
        this.#phone = phone;
    }
    isEqual(otherContact){
         if (this.name.toLowerCase()===otherContact.this.name.toLowerCase()) {
          document.writeln(`The contact ${this.#name} if equal to ${otherContact}`)}
    }
    
}

class Schedule{
    #size;#name;#phone;#contact
        constructor(size=10,name,phone,contact){
        this.size = size;
        this.#name = OneName;
        this.#phone = OneNumber;
        this.#contact = [];

    }
    get sizeTen(){return this.#size}
    get getName(){return this.#name}
    get getPhone(){return this.#phone}
    get getContact(){return this.#contact}

    set sizeTen(sizeTen){ return this.#size=sizeTen}
    set setName(newName){return  this.#name = newName}
    set setPhone(newPhone){ return this.#phone = newPhone}
    set setContact(newContact){ return this.#contact = newContact}

    addContact(contact){
        if(this.contact > 1){
                alert(`the schedule is full bro!`);
            console.log(`the schedule is full crack!`);
            return
        }
   
       this.contactExist.push(contact);
       alert(`Contact added`);
       console.log(`Contact added`);
    }

    contactExist(contact){
     if(this.contactExist(contact)){
            alert(`The contact exist`);
            console.log(`The contact exist`);
            return
        };
}
    
    listContact(contact){
            if(this.contact.length ===0){
            alert(`Empty Schedule`);
            console.log(`Empty Schedule`);
            }else{
            console.log(`Contact in the schedule`)
            this.contacts.forEach(c => console.log())
                                    };
                }
}

    const contact = prompt(`how many contact do you want to add?`)

const firstContact = new Schedule('BBoy LiLKing','156132123',contact)

  
firstContact.addContact
  
firstContact.addContact.parseInt()

 


