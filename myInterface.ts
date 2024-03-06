interface User {
    readonly dbId: number;
    name: string;
    id: number;
    googleId?: string;
    // startTrial: () => string;
    startTrial(): string;
    getCoupon(couponname: string, value: number): number;
}

/* It is reopening */
interface User{
    githubToken: number;
}

// const user :User = {
//     dbId: 5,
//     name: "Forest",
//     id: 123,
//     startTrial: () => {
//         return "started a trial"
//     },
//     githubToken: 45,
//     getCoupon: (coupon: "forest", off: 56) => {
//         return 2;
//     }
// }

/* It can be extended */
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}
const user :Admin = {
    dbId: 5,
    name: "Forest",
    id: 123,
    role: "admin",
    startTrial: () => {
        return "started a trial"
    },
    githubToken: 45,
    getCoupon: (coupon: "forest", off: 56) => {
        return 2;
    }
}




export {}