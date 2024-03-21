import { ReactNode } from "react";
import { useCounter, useCounterText } from "./context/useCounterContext";

interface ChildProps {
  children: (num: number) => ReactNode;
}

export default function Counter({ children }: ChildProps) {
  const {count, increment, decrement} = useCounter();
  const {text, textChange} = useCounterText();

  return (
    <div className="App">
      <h2>{children(count)}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

        <input onChange={textChange} type="text" />
        <p>{text}</p>
      </div>
    </div>
  );
}
