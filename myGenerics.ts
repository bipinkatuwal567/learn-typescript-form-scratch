const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: string): string {
  return val;
}

function identityTwo(val: string | number): string | number {
  return val;
}

function identityThree(val: any): any {
  return val;
}

function identityFour<Type>(val: Type): Type {
  return val;
}

identityFour<number>(5);
identityFour<string>("Hey");

function identityFive<T>(val: T): T {
  return val;
}

interface Bottle {
  type: number;
  brand: string;
}

identityFive<Bottle>({ type: 4, brand: "whatever" });

function getSearchProduct<Type>(products: Type[]): Type {
  // some database operation
  const myIndex = 7;
  return products[myIndex];
}

/* Using Arrow function */
const getArrowSearchProduct = <T>(products: T[]): T => {
  // some database operation
  const myIndex = 10;
  return products[myIndex];
};

interface Database{
    connection: string;
    username: string;
    password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
anotherFunction(3, {connection: "localhost", username: "root", password: ""});

interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string,
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product);
    }
}

export {};
