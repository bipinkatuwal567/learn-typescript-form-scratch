import { ReactNode } from "react"

type CounterProps = {
    children: ReactNode,
    setCount: React.Dispatch<React.SetStateAction<number>>,
}

const Counter = ({children, setCount}: CounterProps) => {
    // const [count, setCount] = useState<number | null>(null) // If there is null we can do it using union

    // const [count, setCount] = useState<number>(0); // We can explicitly us <number> too
    // const [count, setCount] = useState(0); // it can be inferred by ts
  return (
    <>
    <h1>{children}</h1>
    <button onClick={() => setCount(prev => prev + 1)}>+</button>
    <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </>
  )
}

export default Counter