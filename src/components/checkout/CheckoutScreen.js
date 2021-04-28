import React, {useContext} from 'react';

import CreditCardInput from './CreditCardInput';
import SafeArea from '../general/safe-area/SafeArea';
import {CartContext} from '../../services/cart/cart.context'

const CheckoutScreen = () => {
	const {cart} = useContext(CartContext)
	return (
		<SafeArea>
			<CreditCardInput />
		</SafeArea>
	);
};

export default CheckoutScreen;
