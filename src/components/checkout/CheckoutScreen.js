import React, { useContext, useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';

import Text from '../general/text/Text';
import CreditCardInput from './CreditCardInput';
import SafeArea from '../general/safe-area/SafeArea';
import { CartContext } from '../../services/cart/cart.context';
import {
	NameInput,
	AdressInput,
	PayButton,
	ClearButton,
} from './checkout.styles';
import RestaurantInfoCard from '../restaurants/Info/RestaurantInfoCard';
import EmptyCart from './EmptyCart';
import ValidCheckout from './ValidCheckout';

const CheckoutScreen = () => {
	const { cart, restaurant, sum, clearCart } = useContext(CartContext);
	const [name, setName] = useState('a');
	const [adress, setAdress] = useState('a');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		return () => setSuccess(false);
	}, [cart]);

	if (!cart || !restaurant) return <EmptyCart />;
	if (success) return <ValidCheckout />;

	const showPayment = name.length > 0 && adress.length > 0;

	return (
		<SafeArea>
			<RestaurantInfoCard restaurant={restaurant} />
			<ScrollView>
				<Text variant='orderHeader'>Your order:</Text>
				<List.Section>
					{cart.map(({ item, price }, index) => {
						return (
							<List.Item title={`${item} : ${price / 100}$`} key={index} />
						);
					})}
				</List.Section>
				<Text variant='cartTotal'>Total: {sum}$</Text>
				<Divider />
				<NameInput label='Name' value={name} onChangeText={(t) => setName(t)} />
				<AdressInput
					label='Delivery Adress'
					value={adress}
					onChangeText={(t) => setAdress(t)}
				/>
				{showPayment && (
					<>
						<CreditCardInput name={name} />
						<PayButton
							mode={'contained'}
							icon='cash'
							onPress={() => setSuccess(true)}
						>
							Pay
						</PayButton>
					</>
				)}
				<ClearButton
					mode={'contained'}
					icon='cart-off'
					onPress={() => clearCart()}
				>
					Clear cart
				</ClearButton>
			</ScrollView>
		</SafeArea>
	);
};

export default CheckoutScreen;
