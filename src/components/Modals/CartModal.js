import { Fragment, useContext } from "react";
import CartContext from "../Store/cart-context";

const CartModal = () => {
  const crtCtx = useContext(CartContext);
  return (
    <Fragment>
      <h2>Orders</h2>
      {crtCtx.orderedItems.map((item) => {
        return (
          <>
            <li>{item.name}</li>
            <li>price {item.price}</li>
            <li>S-qty{item.s}</li>
            <li>L-qty{item.l}</li>
            <li>M-qty{item.m}</li>
          </>
        );
      })}
    </Fragment>
  );
};
export default CartModal;
