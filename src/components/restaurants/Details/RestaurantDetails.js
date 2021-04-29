import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { View } from 'react-native';

import RestaurantInfoCard from '../Info/RestaurantInfoCard';
import SafeArea from '../../general/safe-area/SafeArea';
import RestaurantMenu from './Menu/RestaurantMenu';
import { CartContext } from '../../../services/cart/cart.context';

const RestaurantDetails = ({ navigation, route }) => {
	const { restaurant } = route.params;
	const { addToCart } = useContext(CartContext);
	const buySpecial = () => {
		addToCart({ item: 'Special', price: 1299 }, restaurant);
		navigation.navigate('Checkout');
	};
	return (
		<SafeArea>
			<RestaurantInfoCard restaurant={restaurant} />
			<RestaurantMenu />
			<View style={{ alignItems: 'center' }}>
				<OrderSpecialButton icon={'cash-usd'} onPress={() => buySpecial()}>
					Order special: $12.99!
				</OrderSpecialButton>
			</View>
		</SafeArea>
	);
};

export default RestaurantDetails;

export const OrderSpecialButton = styled(Button).attrs({
	contentStyle: {
		width: '100%',
		padding: 4,
	},
	labelStyle: { fontSize: 14 },
	color: 'white',
})`
	margin: ${(props) => props.theme.sizes[2]}
	background-color: ${(props) => props.theme.colors.brand.primary};
	justify-content: center;
    width: 70%;
`;
