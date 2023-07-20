import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

const CartProducts = () => {
  const { cart } = useContext(DataContext);
  return cart.length > 0 ? (
    <>
      <CartElements key="cartElements" />
      <CartTotal />
    </>
  ) : (
    <>
      <h2>
        Don't leave your cart empty
      </h2>
      <h3>Don't Miss Out! Fill Your Cart with Sustainable Tech Gear Now!</h3>
    </>
  );
};

export default CartProducts;
