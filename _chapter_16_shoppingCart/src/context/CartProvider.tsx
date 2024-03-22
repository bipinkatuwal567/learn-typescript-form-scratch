import {
  ReactElement,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }

      const { sku, name, price } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      const existCart: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );
      const quantity: number = existCart ? existCart.quantity + 1 : 1;

      return {
        ...state,
        cart: [...filteredCart, { sku, name, price, quantity }],
      };
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }

      const { sku } = action.payload;

      const filterdCart: CartItemType[] = state.cart.filter(
        (item) => item.sku === sku
      );

      return { ...state, cart: [...filterdCart] };
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }

      const { sku, quantity } = action.payload;

      const existItem: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      if (!existItem)
        throw new Error("Item must exist in order to update quantity");

      const updatedItem: CartItemType = { ...existItem, quantity };

      const filteredItem: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return { ...state, cart: [...filteredItem, updatedItem] };
    }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems = state.cart.reduce(
    (previousValue, cartItem) => previousValue + cartItem.quantity,
    0
  );

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce(
      (previousValue, cartItem) =>
        previousValue + cartItem.quantity * cartItem.price,
      0
    )
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = +a.sku.slice(-4);
    const itemB = +b.sku.slice(-4);

    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

const CartContext = createContext<UseCartContextType>(initCartContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
