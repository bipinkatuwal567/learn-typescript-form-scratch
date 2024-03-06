/* Using Union value can be more than one type */
let user: string | number;
user = "Forst";
user = 12893;

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let forest: User | Admin;
/* I made myself a user */
forest = {
    name: "Forest katuwal",
    id: 123,
}

/* Now i want to make myself as admin */
forest = {
    username: "Forest katuwal",
    id: 123,
}

// function getDBid(id: number | string){
//     return `Your DB id is ${id}`;
// }
// getDBid(33);
// getDBid("33");

function getDBid(id: number | string){
    if(typeof (id) === "string"){
        return id.toLowerCase();
    }
}

// Array 
const data1: number[] = [1,2,3];
const data2: string[] = ["1", "2", "3"]
const data3: (number | string | boolean)[] = [0,1, "0", "1", true, false]

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle"; // This is correct
// seatAllotment = "crew"; // This will throw an error because we have assigned "aisle" "middle" "window" to the variable