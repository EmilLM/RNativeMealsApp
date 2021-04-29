import React from 'react';
import SafeArea from '../general/safe-area/SafeArea';
import BgImageLayout from '../general/layout/BgImageLayout'
import Text from '../general/text/Text'
import { CartIcon, CartIconContainer } from './checkout.styles';

const EmptyCart = () => {
	return (
		<BgImageLayout>
				<CartIcon icon='cart-off' />
				<Text variant='title'>Your cart is empty!</Text>
		</BgImageLayout>
	);
};

export default EmptyCart;
