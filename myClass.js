"use strict";
// class User{
//     public email: string;
//     private name: string;
//     readonly city: string = "Kathmandu";
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
var User = /** @class */ (function () {
    function User(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
        this.city = "Pokhara";
    }
    return User;
}());
var forest = new User("forest@fk.com", "forest", 5);
forest.city;
