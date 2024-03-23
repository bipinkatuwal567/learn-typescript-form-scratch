import { useState } from "react";
import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
  const onSubmitOrder = () => {
    dispatch({type: REDUCER_ACTIONS.SUBMIT})
    setConfirm(true);
  }

  return (
    <main className="main main--cart">
      {
        confirm ? <h2>Thank you for your order.</h2>
        : <>
        <h2 className="offscreen">Cart</h2>
        <ul className="cart">
          {cart.map(item => {
            return(
              <CartLineItem
              key={item.sku}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              item={item}
               />
            )
          })}
        </ul>
        <div className="cart__totals">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
          <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>Place Order</button>
        </div>
        </>
      }
    </main>
  )
};

export default Cart;
