import { ReactElement } from "react";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ProductType } from "../context/ProductProvider";

type ProductProps = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTION,
  inCart,
}: ProductProps): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;

  const onAddToCart = () => {
    dispatch({
      type: REDUCER_ACTION.ADD,
      payload: { ...product, quantity: 1 },
    });
  };

  const itemInCart = inCart && " → Item in Cart: ✔️";

  return (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}{" "}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );
};

export default Product;
