import Counter from './Counter'
import { ContextProvider } from './context/useCounterContext'
import { initState } from './context/useCounterContext'

const App = () => {
  return (
    <ContextProvider count={initState.count} text={initState.text} >
      <Counter>
      {(num: number) => <>Current Count: {num}</>}
    </Counter>
    </ContextProvider>
  )
}

export default App