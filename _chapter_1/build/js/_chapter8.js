"use strict";
/* GENERICS */
const echoVal = (args) => args;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// console.log(isObj(true));
// console.log(isObj("John"));
// console.log(isObj([1,2,3]));
// console.log(isObj({name: "John"}));
// console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (User) => {
    return User;
};
console.log(processUser({ id: 12, name: "Dave" }));
// console.log(processUser({name: "Dave"})); // It if don't provide the id then TS will yell at us
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Dave");
console.log(store.state);
// store.state = 12; // Now TS yell at us becuase while initializing class object string is inferred 
const anotherState = new StateObject([12]);
console.log(anotherState.state);
anotherState.state = [...anotherState.state, "hello", "hey", "namaste"];
console.log(anotherState.state);
