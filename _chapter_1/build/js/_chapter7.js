"use strict";
/* INDEX INSERTION */
const todayTransaction = {
    pizza: -19,
    books: -20,
    job: 12,
    dave: 32,
};
// console.log(todayTransaction.pizza);
// console.log(todayTransaction['pizza']);
const prop = "pizza";
// console.log(todayTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: "Doug",
    gpa: 4,
    class: [100, 200],
};
// for(let key in student){
//     // console.log(`${key}: ${student[key]}`) // It yell at us without the INDEX INSERTION
//     console.log(`${key}: ${student[key as keyof Student]}` ); // And this works fine with assertion
// }
/* Another example */
// Object.keys(student).map(key => console.log(`${key} ${student[key as keyof typeof student]}`))
const logStudent = (student, key) => {
    console.log(key, student[key]);
};
logStudent(student, 'gpa');
const monthlyIncomes = {
    salary: 2000,
    bonus: 500,
    sidehustle: 200,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
