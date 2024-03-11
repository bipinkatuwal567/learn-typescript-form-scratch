/* Array */
const Guitar = ["Start", "Les Paul", 5253]; // Union of string and number
const str = ["Hello", "Hi", "Namaster"]; // Array of type string
let mixedData = ["Hello", 5253, true]; // Union of string, number and boolean

str.push("whatever"); // string is assignable but not other data type
mixedData[0] = true;


/* Tuple */
// Tuple are like array but with some restriction if the tuple is boolen, string and number the data should be in same order

let tupleArr: [string, number, boolean] = ["string", 123, false];

mixedData = tupleArr; // This is valid because it accept string, number and boolean
// tupleArr[2] = "Hello"; // This give error because the 2 element of an array is boolean
tupleArr[2] = true; // This is valid

// tupleArr = mixedData; // This is also not valid because mixedDAta may fewer element 

/* Object */
let myObj: object;
myObj = []; // this is valid because array is also object
myObj = {};

const obj = {
    prop1: "prop1",
    prop2: 543,
}

// How to annotate a object
// We can use type instead of infer

// it expect all the type inside this object
// type Guitarist = {
//     name: string,
//     active?: boolean, // We can make this optional
//     album: (string | number)[],
// }

/* using interface will also work */
interface Guitarist {
    name?: string,
    active: boolean, // We can make this optional
    album: (string | number)[],
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    album: [1984, "5959"]
}

let gp: Guitarist = {
    name: "Jimmy",
    active: false,
    album: ["I", "II", "IV"],
}

evh = gp;

const greetGuitarist = (guitarist: Guitarist) => {
    // return `Hello ${guitarist.name.toUpperCase()}`; // Ts will yell at us
    // return `Hello ${guitarist.name?.toUpperCase()}`; // We ca use optional chaining

    // type narrowing
    if(guitarist.name){
        return `Hello ${guitarist.name}!`;
    }
    return "Hello!"
}

console.log(greetGuitarist(gp));

/* ENUM */
enum Grade {
    // U, // It is assign zero when it is enum and all the rest of the enum value goes as it increase like 0,1,2,3,4 
    U = 1, // We can also assing the value of enum now it will be 1,2,3,4,5
    D,
    C,
    B = 45, // This way we can assign the enum too, the enum object after this value will be assign as like 46,47,48
    A, 
}

console.log(Grade.U);
