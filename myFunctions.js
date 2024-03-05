"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Word";
}
addTwo(8);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("Forest");
function signUp(email, password, isPaid) { }
signUp("user@user.com", "password123", false);
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("user@email.com", "password123");
/* This case my appear where we need to return either one or two data types */
// function getValue(value: number){
//     if(value > 3){
//         return true;
//     }
//     return value;
// }
// getValue(5);
var getHello = function (str) {
    return str;
};
getHello("Hello");
var heros = ["Thor", "Ironman", "Captain"];
// const heros = [1,2,3];
/* Typescript is aware of what is comming from the context */
heros.map(function (hero) {
    return "Hero name is ".concat(hero);
});
/* Void is used when we don't need to return anything */
function consoleError(errMsg) {
    console.log(consoleError);
}
consoleError("Error message");
/* Never type is never observed */
function handleError(errMsg) {
    throw new Error(errMsg);
}
handleError("Error message");
