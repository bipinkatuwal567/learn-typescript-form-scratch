"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Tupel are like an array but its has to be in a order as declared */
var user;
user = ["Forest", 123, true];
// user = [123, "Forest", true]; // This will throw an error because the value is in wrong order
/* For example we need a rgb color */
var rgb = [255, 152, 127];
var newUser = ["Forest", 123];
newUser[1] = 435; // This is valid
newUser.push(45); // this is also valid
