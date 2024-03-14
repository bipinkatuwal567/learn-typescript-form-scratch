// class Coder {
//     // secondLang: string; // TS will yell at us for not initializing it
//     secondLang!: string; // Use of assertion because we don't want to initialize it

//   constructor(
//     public readonly name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "Typescript",
//   ) {
//     this.name = name;
//     this.music = music;
//     this.lang = lang;
//     this.age = age;
//   }

//   getAge(){
//     return `Hello! I'm ${this.age}`
//   }
// }

// const myIntro = new Coder("Forest", "Apocylipse", 21)
// console.log(myIntro.getAge());
// console.log(myIntro.age); // age is private and can't be access outside the class so TS yell at us
// console.log(myIntro.lang); // lang is protecet and can only be access to derived or its own class so Ts yell at us

// class WebDev extends Coder{
//     constructor(
//         public computer: string,
//         music: string,
//         name: string,
//         age: number,
//     ){
//         super(name, music, age);
//         this.computer = computer;
//     }

//     public getLang(){
//         return `I write ${this.lang}`; // Protected is accessible here in derived class
//     }
// }

// const sara = new WebDev("Mac", "Sara", "Lofi", 21);
// console.log(sara.getLang());
// console.log(sara.lang); // User outside the class so it is error
// console.log(sara.age); // Again use outside the class so it is error in ts

/////////////////////////////////////////////////////////////////
interface Musician {
  nameOfPerson: string,
  instrument: string,
  play(action: string): string,
}

class Guitarist implements Musician{
  nameOfPerson: string
  instrument: string

  constructor(
    nameOfPerson: string,
    instrument: string, 
  ){
    this.nameOfPerson = nameOfPerson
    this.instrument = instrument
  }

  play(action: string){
    return `${this.nameOfPerson} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist("Jimmy", "guitar")
console.log(Page.play("strums"))
/////////////////////////////////////////////////////////////////

class Peeps{
  static count: number = 0;
  
  static getCount(): number{
    return Peeps.count;
  }

  public id: number;
  
  constructor(
    public name: string
  ){
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const dave = new Peeps("dave");
const amy = new Peeps("amy");
const steve = new Peeps("steve");

console.log("Total",Peeps.count);
console.log("Dave", dave.id)
console.log("Amy", amy.id)
console.log("Steve", steve.id)
/////////////////////////////////////////////////////////////////

class Bands{
  private dataState: string[];

  constructor(){
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]){
    if(Array.isArray(value) && value.every(el =>  typeof el === "string")){
      this.dataState = value;
      return;
    }else throw new Error("Given params is not an string array")
  }
}

const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
myBands.data = ["Ven Hallen", 12]







