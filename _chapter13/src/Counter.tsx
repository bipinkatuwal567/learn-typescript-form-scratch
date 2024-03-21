import { ReactNode } from "react";

interface ChildProps {
  children: (num: number) => ReactNode;
}

export default function Counter({ children }: ChildProps) {
  //   const [count, setCount] = useState(1);

  return (
    <div className="App">
      <h2>{children(state.count)}</h2>
      <div>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>

        <input onChange={textChange} type="text" />
        <p>{state.text}</p>
      </div>
    </div>
  );
}
