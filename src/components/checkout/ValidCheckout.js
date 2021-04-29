import React from 'react';
import SafeArea from '../general/safe-area/SafeArea';
import Text from '../general/text/Text';
import { CartIcon, CartIconContainer } from './checkout.styles';
import { AccountBg, AccountCover } from '../account/account.styles';
import BgImageLayout from '../general/layout/BgImageLayout';

const ValidCheckout = () => {
	return (
		<BgImageLayout>
			<CartIcon icon='check-outline' />
			<Text variant='title'>Payment successful!</Text>
			<Text variant='title'>Your meal is being delivered!</Text>
		</BgImageLayout>
	);
};

export default ValidCheckout;
