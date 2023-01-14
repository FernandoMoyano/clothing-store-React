import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	//cart state
	const [cart, setCart] = useState([]);
  //Add to cart
  const addToCart=()=>{
    console.log("added to the cart");
  }

	return (
		<CartContext.Provider value={{addToCart}}>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider
