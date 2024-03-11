"use strict";
/* Literal types */
let nameMy;
// myName = "bipin"; // It won't be assign because myName can only be 'Forest'
let userName;
userName = 'Bob'; // We can only assing these above three value or name
/* Function */
const addNum = (a, b) => {
    return a + b;
};
// void as return in fuction means there is nothing to return
const logMsg = (message) => {
    console.log(message);
};
// logMsg("Hello World!");
// logMsg(addNum(2, 5));
const subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number;
// }
const multiply = (a, b) => {
    return a * b;
};
// logMsg(multiply(5, 5));
/* Optional parameter */
// If there is optional parameter then it should be at last
const addAll = (a, b, c) => {
    // type narrowing
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
/* Default parameter */
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMsg(addAll(1,2,3));
// logMsg(addAll(1,2));
// logMsg(sumAll(2, 4));
// logMsg(sumAll(2, 4, 5));
// logMsg(sumAll(undefined, 4, 5)); // If the first parameter have default value we need to give it undefined type
/* Rest Parameter */
const total = (a, ...num) => {
    // In reduce function we don't have to define types TS automatically infer it
    return a + num.reduce((prev, cur) => prev + cur);
};
logMsg(total(10, 2, 3, 4));
/* Never type */
const errorMessage = (errMsg) => {
    throw new Error(errMsg);
};
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++; // it will create infinite loop
        if (i < 100)
            break; // Now it will break whenn i reach  to 100
    }
};
/* Custom type guard */
const isNumber = (val) => {
    return (typeof val === "number") ? true : false;
};
/* Use of Never */
const numberOrString = (value) => {
    /* Type guard */
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return errorMessage("This  should never happen");
};
