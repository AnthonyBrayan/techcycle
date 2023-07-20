import { useContext } from "react";
import { DataContext } from "../../Context/ConversoContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import imagen from "../../Assets/emptyCart.jpg"

const CartProducts = () =>{
   const { cart } = useContext(DataContext);
    return cart.length > 0 ?(
    <>
    <CartElements key="cartElements"/>
    <CartTotal />
    </>
    ): (

      <><img className="emptyCart" src={imagen} alt="" /><><h2>

          Don't leave your cart empty
        </h2><h3>Don't Miss Out! Fill Your Cart with Sustainable Tech Gear Now!</h3></></>
    );
};

export default CartProducts;