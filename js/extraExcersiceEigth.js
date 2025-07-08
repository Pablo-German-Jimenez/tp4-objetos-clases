/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/

class Persona{
    #name ; #age; #profession;
    constructor(name,age,profesion){
        this.#name = name;
        this.#age = age;
        this.#profession = profesion;
    }

    get getName(){return this.#name}
    get getAge(){return this.#age}
    get getProfession(){return this.#profession}

    set seTName(setName){return this.#name = setName}
    set seTAge(setAge){return this.#age = setAge}
    set seTProfession(setProfession){return this.#profession = setProfession}

    greeting(){
        console.log(`${this.getName} is greeting you! bonjour !`)
    }

    sayGoobBye(){
        console.log(`${this.getName} is leaving and waving !`)
    }

   }

   const bboyLinkin = new Persona('BboyLinkin',35,'Software Engineering')
   const tonyStark = new Persona('Robert Downey Jr.', 55 , 'Engineering and SEO Stark Companies')
   bboyLinkin.greeting()
   tonyStark.sayGoobBye()
   
