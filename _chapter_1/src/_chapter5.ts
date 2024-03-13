/* TYPE ASSERTION or CASTING */

type one = string;
type two = number | string;
type three = 'hello';

/* Convert to more specific or less specific */
let a: one = 'hello'
let b = a as two; // less specific
let c = a as three; // more specific


/* Assertion can be done in this way to */
// using < > but the problem is that it cannot be used in tsx or react
let d = <two> 123;
let e = <three> 'hello';

const addOrConcat = (a: number, b: number, c: "add" | "concat"): string | number => {
    if(c === "add") return a + b;
    return " " + a + b;
}

// const myVal: string = addOrConcat(2, 3, "concat") // Ts compiler will yell at us but
const myVal: string = addOrConcat(2,3,"concat") as string; // Now it won't becuase we're explicitly telling that it will return string

const myStr : number = addOrConcat(4,5,"concat") as number; // It accepts although there is concat arg which will return string. So, we have to be aware of these type of mistake

/* Although we can define out type using assertion but also TS check it */
// 10 as string; // It will yell error
/* Instead we can use unknown first */
(10 as unknown) as string; // Now it won't yell at us


// ASSERTION on html document
const img = document.querySelector("img")! // using ! make this non null assertion
const nextImg = document.getElementById("#img") as HTMLImageElement
const anotherImg = <HTMLImageElement>document.getElementById("#img")

img.src
nextImg.src
anotherImg.src

