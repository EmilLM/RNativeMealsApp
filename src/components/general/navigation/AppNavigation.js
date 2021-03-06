import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {colors} from '../../../utils/theme/colors'
import { screenOptions } from '../../../utils/screenOptions/screenOptions';
import MapScreen from '../../map/screen/MapScreen';
import CheckoutScreen from '../../checkout/CheckoutScreen';
import RestaurantNavigator from './RestaurantNavigator';
import SettingsNavigator from './SettingsNavigator';

import { RestaurantsContextProvider } from '../../../services/restaurants/restaurants.context';
import { CartContextProvider } from '../../../services/cart/cart.context';
import { LocationContextProvider } from '../../../services/location/location.context';
import { FavouritesContextProvider } from '../../../services/favourites/favourites.context';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
	return (
		<FavouritesContextProvider>
			<LocationContextProvider>
				<RestaurantsContextProvider>
					<CartContextProvider>
						<Tab.Navigator
							screenOptions={screenOptions}
							tabBarOptions={{
								activeTintColor: colors.brand.primary,
								inactiveTintColor: colors.ui.secondary,
								labelStyle: { fontSize: 14 },
								tabStyle: { marginBottom: 4, marginTop: 4 },
							}}
						>
							<Tab.Screen name='Restaurants' component={RestaurantNavigator} />
							<Tab.Screen name='Map' component={MapScreen} />
							<Tab.Screen name='Checkout' component={CheckoutScreen} />

							<Tab.Screen name='Settings' component={SettingsNavigator} />
						</Tab.Navigator>
					</CartContextProvider>
				</RestaurantsContextProvider>
			</LocationContextProvider>
		</FavouritesContextProvider>
	);
}
