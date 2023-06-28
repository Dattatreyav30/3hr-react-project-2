
import AdminForm from "./components/AdmiForm/AdminForm";
import UserPanel from "./components/UserPanel/UserPanel";

import CartProvider from "./components/Store/CartProvider";
import CartButton from "./components/CartButton/CartButton";
import Cart from "./components/Cart/Cart";
const App = () => {
  return (
    <CartProvider>
      <h2>Restaurent website demo</h2>
      <CartButton/>
      <AdminForm />
      <UserPanel/>
      <Cart/>
    </CartProvider>
  );
};

export default App;
