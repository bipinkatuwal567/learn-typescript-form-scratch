/* INDEX INSERTION */

// interface TransactionObj{
//     readonly [index: string]: number,
// }

interface TransactionObj{
    readonly [index: string]: number,
    pizza: number,
    books: number,
    job: number,
}

const todayTransaction: TransactionObj = {
    pizza: -19,
    books: -20,
    job: 12,
    dave: 32,
}

// console.log(todayTransaction.pizza);
// console.log(todayTransaction['pizza']);

const prop: string = "pizza";
// console.log(todayTransaction[prop]);

const todaysNet = (transactions: TransactionObj) => {
    let total = 0;
    for(const transaction in transactions){
        total += transactions[transaction];
    }
    return total;
}

// console.log(todaysNet(todayTransaction))

// todayTransaction.pizza = 23;
// console.log(todayTransaction['dave']); // It will return undefined becuase it's not there

/////////////////////////////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined ,
    name: string,
    gpa: number,
    class?: number[],
}

const student: Student = {
    name: "Doug",
    gpa: 4,
    class: [100, 200],
}

// for(let key in student){
//     // console.log(`${key}: ${student[key]}`) // It yell at us without the INDEX INSERTION
//     console.log(`${key}: ${student[key as keyof Student]}` ); // And this works fine with assertion
// }

/* Another example */
// Object.keys(student).map(key => console.log(`${key} ${student[key as keyof typeof student]}`))

const logStudent = (student: Student, key: keyof Student): void => {
    console.log(key, student[key]);
}

logStudent(student, 'gpa');

////////////////////////////////////////////////////////////////////

type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 2000,
    bonus: 500,
    sidehustle: 200,
}

for(const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
}

