import {
  ChangeEvent,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

type initStateType = {
  count: number;
  text: string;
};

export const initState: initStateType = { count: 0, text: "" };

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

  const increment = useCallback(() => {
    reducers({ type: REDUCER_ACTION_TYPE.INCREMENT });
  }, []);

  const decrement = useCallback(() => {
    reducers({ type: REDUCER_ACTION_TYPE.DECREMENT });
  }, []);

  const textChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    reducers({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  }, []);

  return { state, increment, decrement, textChange };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
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

type useCounterHooktype = {
  count: number,
  increment: () => void,
  decrement: () => void,
}

export const useCounter = (): useCounterHooktype => {
  const {state: {count}, increment, decrement} = useContext(CounterContext);

  return {count, increment, decrement}
}

type useCounterTextHookType = {
  text: string,
  textChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useCounterText = (): useCounterTextHookType => {
  const {state: {text}, textChange} = useContext(CounterContext);

  return {text, textChange}
}
