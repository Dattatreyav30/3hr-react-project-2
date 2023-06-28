import react from "react";

const CartContext = react.createContext({
  items: [],
  orderedItems:[],
  addItemToCart: (item) => {},
  updateQuantity: (item, qty) => {},
  addOrderdItems : (item)=>{}
});

export default CartContext;
