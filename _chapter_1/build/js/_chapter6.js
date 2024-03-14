"use strict";
// class Coder {
//     // secondLang: string; // TS will yell at us for not initializing it
//     secondLang!: string; // Use of assertion because we don't want to initialize it
class Guitarist {
    constructor(nameOfPerson, instrument) {
        this.nameOfPerson = nameOfPerson;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.nameOfPerson} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const dave = new Peeps("dave");
const amy = new Peeps("amy");
const steve = new Peeps("steve");
console.log("Total", Peeps.count);
console.log("Dave", dave.id);
console.log("Amy", amy.id);
console.log("Steve", steve.id);
/////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Given params is not an string array");
    }
}
const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
myBands.data = ["Ven Hallen", 12];
