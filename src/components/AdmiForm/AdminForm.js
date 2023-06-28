import { useContext, useState } from "react";
import CartContext from "../Store/cart-context";

const AdminForm = () => {
  const [formData, setFormData] = useState({});

  const cartCtx = useContext(CartContext);

  const nameChangeHandler = (e) => {
    const updatedFormData = { ...formData, name: e.target.value };
    setFormData(updatedFormData);
  };

  const descChangeHandler = (e) => {
    const updatedFormData = { ...formData, description: e.target.value };
    setFormData(updatedFormData);
  };

  const priceChangeHandler = (e) => {
    const updatedFormData = { ...formData, price: e.target.value };
    setFormData(updatedFormData);
  };

  const sSizeChangeHnadler = (e) => {
    const updatedFormData = { ...formData, s: e.target.value };
    setFormData(updatedFormData);
  };

  const lChangeHandler = (e) => {
    const updatedFormData = { ...formData, l: e.target.value };
    setFormData(updatedFormData);
  };

  const mChangeHandler = (e) => {
    const updatedFormData = { ...formData, m: e.target.value };
    setFormData(updatedFormData);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    cartCtx.addItemToCart(formData);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h3>Admin panel</h3>
      <input
        key="name"
        onChange={nameChangeHandler}
        type="text"
        name="name"
        id="name"
        placeholder="Tshirt name"
      />
      <input
        key="description"
        onChange={descChangeHandler}
        type="text"
        name="description"
        id="description"
        placeholder="Description"
      />
      <input
        key="price"
        onChange={priceChangeHandler}
        type="number"
        name="price"
        id="price"
        placeholder="price"
      />
      <input
        key="s"
        onChange={sSizeChangeHnadler}
        type="text"
        name="S"
        id="S"
        placeholder="size S"
      />
      <input
        key="l"
        onChange={lChangeHandler}
        type="text"
        name="L"
        id="L"
        placeholder="size L"
      />
      <input
        key="m"
        onChange={mChangeHandler}
        type="text"
        name="M"
        id="M"
        placeholder="size M"
      />
      <button>Add</button>
    </form>
  );
};

export default AdminForm;
