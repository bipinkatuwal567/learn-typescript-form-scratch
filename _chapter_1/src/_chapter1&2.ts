/* Chapter one is all about knowing about tsconfig file and some data types */

let myName: string = "Forest";
let myAge: number;
let isLoading: boolean;
let album: any;

myAge = 21;
isLoading = true;
album = 523; // It can be of any type

function sum(a: number, b: string){
    return a + b;
}

// Union
let postId: string | number;
let isActive: boolean | number | string;

// Regular Expression
let re: RegExp = /\w+/g;