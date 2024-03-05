const user = {
    name: "Forest",
    email: "Forest@email.com",
    isActive: true,
}

function createUser({name: string, isPaid: boolean}){}
// createUser({name : "forest", isPaid: true, email: "email@email.com"}); // It will throw an error due to the ts odd behaviour in obj
const newUser = {name : "forest", isPaid: true, email: "email@email.com"}; // No error
createUser(newUser); 

function createCourse({}): {name: string, price: number}{
    return {name: "typescript", price: 1999}
}

/* Type aliases */
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function getUser(user: User): User{
//     return {name: "Forest", email: "email@e.com", isActive: true}
// }
// getUser({name: "Forest", email: "email@e.com", isActive: true})

// createCourse({});

type User = {
    readonly _id : number;
    name: string;
    email: string;
    isActive: boolean;
    creditable?: boolean; // Adding ? makes it option either you can pass it or not
}

let myUser: User = {
    _id: 123,
    name: "B",
    email: "b@b.com",
    isActive: true,
}

myUser.email = "c@c.com" // Mutation is easy here
// myUser._id = 3243; // Mutation can not be done here because of readonly


/* Mix and match of type */
type cardNumber = {
    cardNumber : string;
}
type cardDate = {
    cardDate : string;
}
type cardCvv = {
    cvv : number;
}
type cardDetails = cardNumber & cardDate & cardCvv;  

export {}

