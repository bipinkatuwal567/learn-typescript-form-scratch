/* GENERICS */

const echoVal = <T>(args: T): T => args;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObj(true));
// console.log(isObj("John"));
// console.log(isObj([1,2,3]));
// console.log(isObj({name: "John"}));
// console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

/* Above function using interface */
interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasId {
  id: number;
}

const processUser = <T extends HasId>(User: T): T => {
  return User;
};

console.log(processUser({ id: 12, name: "Dave" }));
// console.log(processUser({name: "Dave"})); // It if don't provide the id then TS will yell at us

const getUserProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

class StateObject<T>{
    data: T;

    constructor(value: T){
        this.data = value;
    }

    get state(): T{
        return this.data;
    }

    set state(value: T){
        this.data = value;
    }
}

const store = new StateObject("Dave");
console.log(store.state);
// store.state = 12; // Now TS yell at us becuase while initializing class object string is inferred 

const anotherState = new StateObject<(string | number | boolean)[]>([12]);
console.log(anotherState.state);
anotherState.state = [...anotherState.state, "hello", "hey", "namaste"]
console.log(anotherState.state);

