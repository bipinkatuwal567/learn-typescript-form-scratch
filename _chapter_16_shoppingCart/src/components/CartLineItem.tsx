import React, { ChangeEvent, ReactElement } from "react";
import { CartItemType, ReducerActionType, ReducerAction } from "../context/CartProvider";

type CartLineItemProps = {
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  item: CartItemType;
};

const CartLineItem = ({
  dispatch,
  REDUCER_ACTIONS,
  item,
}: CartLineItemProps) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

    const lineTotal: number = item.quantity * item.price;

    const highestQty: number = 20 > item.quantity ? 20 : item.quantity;

    const optionsValues: number[] = [...Array(highestQty).keys()].map(i => i + 1);

    const options: ReactElement[] = optionsValues.map(val => {
        return <option key={`opt-${val}`} value={val}>{val}</option>
    })

    const onChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: REDUCER_ACTIONS.QUANTITY, payload: {...item, quantity: Number(e.target.value)}})
    }

    const onRemoveFromCart = () => {
        dispatch({
            type: REDUCER_ACTIONS.REMOVE,
            payload: item,
        })
    }

  return (
    <li className="cart__item">
        <img src={img} alt={item.name} className="cart__img" />
        <div aria-label="Item Name">{item.name}</div>
        <div aria-label="Price Per Item">{new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(item.price)}</div>

        <label htmlFor="itemQty" className="offscreen">Item Quantity</label>
        <select name="itemQty" value={item.quantity} onChange={onChangeQuantity} id="itemQty" className="cart__select">{options}</select>

        <div className="cart__item-subtotal" aria-label="Line Item Subtotal">{
            new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(lineTotal)
        }</div>

        <button className="cart__button" aria-label="Remove Item From Cart" title="Remove Item From Cart" onClick={onRemoveFromCart}>❌</button>
    </li>
  )
};

export default CartLineItem;
