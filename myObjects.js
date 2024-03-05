"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Forest",
    email: "Forest@email.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name : "forest", isPaid: true, email: "email@email.com"}); // It will throw an error due to the ts odd behaviour in obj
var newUser = { name: "forest", isPaid: true, email: "email@email.com" }; // No error
createUser(newUser);
function createCourse(_a) {
    return { name: "typescript", price: 1999 };
}
var myUser = {
    _id: 123,
    name: "B",
    email: "b@b.com",
    isActive: true,
};
myUser.email = "c@c.com"; // Mutation is easy here
