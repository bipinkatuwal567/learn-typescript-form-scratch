"use strict";
/* TYPE ASSERTION or CASTING */
/* Convert to more specific or less specific */
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
/* Assertion can be done in this way to */
// using < > but the problem is that it cannot be used in tsx or react
let d = 123;
let e = 'hello';
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return " " + a + b;
};
// const myVal: string = addOrConcat(2, 3, "concat") // Ts compiler will yell at us but
const myVal = addOrConcat(2, 3, "concat"); // Now it won't becuase we're explicitly telling that it will return string
const myStr = addOrConcat(4, 5, "concat"); // It accepts although there is concat arg which will return string. So, we have to be aware of these type of mistake
/* Although we can define out type using assertion but also TS check it */
// 10 as string; // It will yell error
/* Instead we can use unknown first */
10; // Now it won't yell at us
// ASSERTION on html document
const img = document.querySelector("img"); // using ! make this non null assertion
const nextImg = document.getElementById("#img");
const anotherImg = document.getElementById("#img");
img.src;
nextImg.src;
anotherImg.src;
