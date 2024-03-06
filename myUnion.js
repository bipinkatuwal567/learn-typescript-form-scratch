/* Using Union value can be more than one type */
var user;
user = "Forst";
user = 12893;
var forest;
/* I made myself a user */
forest = {
    name: "Forest katuwal",
    id: 123,
};
/* Now i want to make myself as admin */
forest = {
    username: "Forest katuwal",
    id: 123,
};
// function getDBid(id: number | string){
//     return `Your DB id is ${id}`;
// }
// getDBid(33);
// getDBid("33");
function getDBid(id) {
    if (typeof (id) === "string") {
        return id.toLowerCase();
    }
}
// Array 
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [0, 1, "0", "1", true, false];
var seatAllotment;
seatAllotment = "aisle"; // This is correct
// seatAllotment = "crew"; // This will throw an error because we have assigned "aisle" "middle" "window" to the variable
