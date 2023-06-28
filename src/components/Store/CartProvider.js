import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);

  const addItemHandler = (item) => {
    const updateItems = [item, ...cartItems];
    setCartItems(updateItems);
    console.log(cartItems);
  };

  const addOrderdItemsHandler = (item) => {
    const updatedItems = [item, ...orderedItems];
    setOrderedItems(updatedItems);
  };

  const updateQtyHandler = (qty) => {};

  const cartContext = {
    items: cartItems,
    orderedItems: orderedItems,
    addItemToCart: addItemHandler,
    addOrderdItems: addOrderdItemsHandler,
    updateQuantity: updateQtyHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
