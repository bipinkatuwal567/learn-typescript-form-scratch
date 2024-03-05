function addTwo(num: number): number{
    return num + 2;
    // return "Word";
}
addTwo(8);

function getUpper(value: string){
    return value.toUpperCase();
}
getUpper("Forest");

function signUp(email: string, password: string, isPaid: boolean){}
signUp("user@user.com","password123",false);

let loginUser = (email: string, password: string, isPaid: boolean = false) => {}
loginUser("user@email.com", "password123");


/* This case my appear where we need to return either one or two data types */
// function getValue(value: number){
//     if(value > 3){
//         return true;
//     }
//     return value;
// }
// getValue(5);

const getHello = (str: string): string => {
    return str
}
getHello("Hello");

const heros = ["Thor", "Ironman", "Captain"];
// const heros = [1,2,3];

/* Typescript is aware of what is comming from the context */
heros.map((hero): string => {
    return `Hero name is ${hero}`
})


/* Void is used when we don't need to return anything */
function consoleError(errMsg: string): void{
    console.log(consoleError);
}
consoleError("Error message");


/* Never type is never observed */
function handleError(errMsg: string): never{
    throw new Error(errMsg);
}
handleError("Error message");



export {}