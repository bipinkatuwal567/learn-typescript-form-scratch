import {
  ChangeEvent,
  ReactElement,
  ReactNode,
  createContext,
  useReducer,
} from "react";

type initStateType = {
  count: number;
  text: string;
};

const initState: initStateType = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (
  state: initStateType,
  action: ReducerAction
): initStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};

const useCounterContext = (initState: initStateType) => {
  const [state, reducers] = useReducer(reducer, initState);

  function increament() {
    reducers({ type: REDUCER_ACTION_TYPE.INCREMENT });
  }

  function decreament() {
    reducers({ type: REDUCER_ACTION_TYPE.DECREMENT });
  }

  function textChange(e: ChangeEvent<HTMLInputElement>) {
    reducers({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  }

  return { state, increament, decreament, textChange };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initState,
  increament: () => {},
  decreament: () => {},
  textChange: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type ContextProviderType = {
  children?: ReactElement | undefined;
};

export const ContextProvider = ({
  children,
  ...initState
}: ContextProviderType & initStateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};
