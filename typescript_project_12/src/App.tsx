import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List";


function App() {
  const [count, setCount] = useState(0);

  return(
    <>
    <Heading title="Hello from Heading!" />
    <Section title="Different Subheading">Section Area</Section>
    <Counter setCount={setCount}>The count is {count}</Counter>
    <List items={["🍵 Coffee", "💻 Code", "🌮 Tacos"]} render={(item: string) => <span>{item}</span>} />
    </>
  )
}

export default App
