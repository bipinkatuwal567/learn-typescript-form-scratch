"use strict";
/* UTILITY TYPES */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGrade = updateAssignment(assign1, { grade: 100 });
/* REQUIRED AND READONLY  */
const recordAssignment = (assign) => {
    // send to database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true }));
/* RECORD */
// Record and the <which will be key, then which will be value>
const hexColor = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrade = {
    Sarah: "A",
    Billie: "U",
    Stuart: "D",
};
const studentAssignment = {
    Sarah: { assign1: 85, assign2: 98 },
    Billie: { assign1: 56, assign2: 87 },
    Stuart: { assign1: 74, assign2: 98 }
};
const score = {
    studentId: "fi123",
    grade: 90,
};
const preiew = {
    studentId: "fi123",
    title: "final project",
};
/* ReturnType*/
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);
const arr = ["Generics", 31];
const tsAssign2 = createNewAssign(...arr);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(data => console.log(data));
