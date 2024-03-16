/* UTILITY TYPES */

// PARTIAL

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGrade = updateAssignment(assign1, { grade: 100 });

/* REQUIRED AND READONLY  */

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign;
};

const assignVerified: Readonly<Assignment> = {...assignGrade, verified: true}

recordAssignment({...assignGrade, verified: true})


/* RECORD */
// Record and the <which will be key, then which will be value>
const hexColor: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
} 

type studentName = "Sarah" | "Billie" | "Stuart";
type grade = "A" | "B" | "C" | "D" | "U";

const finalGrade: Record<studentName, grade> = {
    Sarah: "A",
    Billie: "U",
    Stuart: "D",
}

interface Assign {
    assign1: number,
    assign2: number,
}

const studentAssignment: Record<studentName, Assign> = {
    Sarah: {assign1: 85, assign2: 98},
    Billie: {assign1: 56, assign2: 87},
    Stuart: {assign1: 74, assign2: 98}
}

/* PICK AND OMIT */
type AssignmentResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignmentResult = {
    studentId: "fi123",
    grade: 90,
}

type AssignmentPreview = Omit<Assignment, "verified" | "grade">;
const preiew: AssignmentPreview = {
    studentId: "fi123",
    title: "final project",
}

/* EXCLUDE AND EXTRACT */
type adjustedGrade = Exclude<grade, "U">;
type highGrade = Extract<grade, "A" | "B">;


/* Nonnullable */
type possibleNames = "Dave" | "John" | null | undefined;
type nameOnly = NonNullable<possibleNames>;


/* ReturnType*/

// type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

/* It is mostly used when we import a third party library */
// So we can find what type function is returning
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign(
    "Utility types",
    100,
)

console.log(tsAssign);

/* PARAMETERS */
type assignParams = Parameters<typeof createNewAssign>

const arr: assignParams = ["Generics", 31]; 

const tsAssign2: NewAssign = createNewAssign(...arr);
console.log(tsAssign2);

/* AWAITED */
interface Users {
    id: number,
    name: string,
    email: string,
    username: string,
}

const fetchUsers = async (): Promise<Users[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if(err instanceof Error) console.log(err.message);
    })

    return data;
} 

type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
fetchUsers().then(data => console.log(data));



