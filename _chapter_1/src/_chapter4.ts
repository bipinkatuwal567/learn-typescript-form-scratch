/* Type aliasis */
type stringOrNumber = number | string
type stringOrNumberArray = (number | string)[];

type Guitarists = {
    name?: string,
    active: boolean, // We can make this optional
    album: stringOrNumberArray,
}

type userId = stringOrNumber;

/* Literal types */
let nameMy : 'Forest';
// myName = "bipin"; // It won't be assign because myName can only be 'Forest'

let userName : 'Forest' | 'Rachael' | 'Bob';
userName = 'Bob' // We can only assing these above three value or name

/* Function */
const addNum = (a: number, b: number): number => {
    return a + b;
}

// void as return in fuction means there is nothing to return
const logMsg = (message: any): void => {
    console.log(message);
}

// logMsg("Hello World!");
// logMsg(addNum(2, 5));

const subtract = function(c: number, d: number): number{
    return c - d;
}

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//     (a: number, b: number): number;
// }

const multiply: mathFunction = (a, b) => {
    return a * b;
}

// logMsg(multiply(5, 5));

/* Optional parameter */
// If there is optional parameter then it should be at last
const addAll = (a: number, b: number, c?: number): number => {
    // type narrowing
    if(typeof c !== "undefined"){
        return a + b + c;
    }

    return a + b;
}

/* Default parameter */
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

// logMsg(addAll(1,2,3));
// logMsg(addAll(1,2));

// logMsg(sumAll(2, 4));
// logMsg(sumAll(2, 4, 5));
// logMsg(sumAll(undefined, 4, 5)); // If the first parameter have default value we need to give it undefined type


/* Rest Parameter */
const total = (a: number,...num: number[]): number => {
    // In reduce function we don't have to define types TS automatically infer it
    return a + num.reduce((prev, cur) => prev + cur);
}

logMsg(total(10,2,3,4));

/* Never type */
const errorMessage = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infiniteLoop = () => {
    let i: number = 1;
    while(true){
        i++; // it will create infinite loop
        if(i < 100) break; // Now it will break whenn i reach  to 100
    }
}


/* Custom type guard */
const isNumber = (val: any): boolean => {
    return (typeof val === "number") ? true : false;
}

/* Use of Never */
const numberOrString = (value: string | number): string => {
    /* Type guard */
    if(typeof value === "string") return "string";
    if(isNumber(value)) return "number";
    
    return errorMessage("This  should never happen");
}










