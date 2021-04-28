import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../auth/auth.context';

export const CartContext = createContext();

export const CartContextProvider = (props) => {
	const { user } = useContext(AuthContext);

	const [cart, setCart] = useState([]);
	const [restaurant, setRestaurant] = useState(null);

	const addToCart = (item, rst) => {
		if (!restaurant || restaurant.placeId !== rst.placeId) {
			setRestaurant(rst);
			setCart([item]);
		} else setCart([...cart, item]);
	};

	const clearCart = () => {
		setCart([]);
		setRestaurant(null);
	};

	return (
		<CartContext.Provider
			value={{
				addToCart,
				clearCart,
				restaurant,
				cart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};