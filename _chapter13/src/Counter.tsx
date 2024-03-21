import { ChangeEvent, ReactNode, useReducer, useState } from "react";

const initState = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string,
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT: 
      return {...state, text: action.payload ?? ""} 
    default:
      throw new Error();
  }
};

interface ChildProps {
  children: (num: number) => ReactNode;
}

export default function Counter({ children }: ChildProps) {
  //   const [count, setCount] = useState(1);
  const [state, reducers] = useReducer(reducer, initState);

  function increament() {
    reducers({ type: REDUCER_ACTION_TYPE.INCREMENT });
  }

  function decreament() {
    reducers({ type: REDUCER_ACTION_TYPE.DECREMENT });
  }

  function textChange(e: ChangeEvent<HTMLInputElement>){
    reducers({
        type: REDUCER_ACTION_TYPE.NEW_INPUT, 
        payload: e.target.value
    })
  }

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
