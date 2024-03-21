import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent, useMemo, useRef } from "react";

interface User {
  username: string;
  id: number;
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n < 2) return n
  return fib(n - 1) + fib(n - 2);
}

const myNumber: number = 9;

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>([
    { username: "bipin", id: 2 },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("Mounting...");
    console.log("Users: ", user);

    return () => {
      console.log("Unmounting...");
    };
  }, [user]);

  const addTwo = useCallback((e: MouseEvent <HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount((prev) => prev + 1), []);

  const result = useMemo<number>(() => fib(myNumber), [])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}
