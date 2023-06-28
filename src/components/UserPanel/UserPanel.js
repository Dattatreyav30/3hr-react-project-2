import React, { useContext } from "react";
import CartContext from "../Store/cart-context";

const UserPanel = () => {
  const cartCtx = useContext(CartContext);

  const sqtyOnClickHandler = (meal) => {
    cartCtx.addOrderdItems(meal);
  };

  const mQtyHandler = (meal) => {
    cartCtx.addOrderdItems(meal);
  };

  const lQtyHandler = (meal) => {
    cartCtx.addOrderdItems(meal);
  };

  return (
    <>
      {cartCtx.items.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.description}</li>
          <li>{item.price}</li>
          <button onClick={() => sqtyOnClickHandler(item)}>S-qty {item.s}</button>
          <button onClick={() => mQtyHandler(item)}>M-qty {item.m}</button>
          <button onClick={() => lQtyHandler(item)}>L-qty {item.l}</button>
        </ul>
      ))}
    </>
  );
};

export default UserPanel;
