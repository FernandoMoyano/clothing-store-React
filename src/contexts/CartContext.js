import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	//cart state
	const [cart, setCart] = useState([]);

	//ADD TO CART
	const addToCart = (product, id) => {
		const newItem = { ...product, amount: 1 };

		//Chek if the item is already in the cart
		const cartItem = cart.find((item) => {
			return item.id === id;
		});

		//If the product is already in the cart, add only the amount, otherwise add it
		if (cartItem) {
			const newCart = [...cart].map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else {
					return item;
				}
			});
			//establecer el estado como carro nuevo
			setCart(newCart);
		} else {
			//otherwise the state is passed the cart plus the new item
			setCart([...cart, newItem]);
		}
	};

	//REMOVE FROM CART
	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => {
			return item.id !== id;
		});
		setCart(newCart);
	};

	//CLEAR CART

	const clearCart = () => {
		setCart([]);
	};

	//INCREASE AMOUNT
	const increaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);
		addToCart(cartItem, id);
	};

	//DECREASE AMOUNT
	const decreaseAmount = (id) => {
		const cartItem = cart.find((item) => {
			return item.id === id;
		});
		if (cartItem) {
			const newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount - 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		}
		if (cartItem.amount < 2) {
			removeFromCart(id);
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				clearCart,
				removeFromCart,
				addToCart,
				increaseAmount,
				decreaseAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
