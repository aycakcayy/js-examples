class Personel{  //classlar pascalcase yazılır.
   
    constructor(name,surname){
        this.name=name;
        this.surname=surname;

    }

    record(){
       console.log("personle recorded:" + this.name, this.surname);
   }
}

const personel= new Personel("ayca","akcay")
personel.record();



