import React, { useState } from 'react';
import { List, Divider } from 'react-native-paper';
import { ScrollView } from 'react-native';

const RestaurantMenu = () => {
	const [openBreakfast, setOpenBreakfast] = useState(false);
	const [openLunch, setOpenLunch] = useState(false);
	const [openDinner, setOpenDinner] = useState(false);
	const [openDrinks, setOpenDrinks] = useState(false);
	return (
		<ScrollView>
			<List.Accordion
				title='Breakfast'
				left={(props) => <List.Icon {...props} icon='bread-slice' />}
				expanded={openBreakfast}
				onPress={() => setOpenBreakfast(!openBreakfast)}
			>
				<List.Item title='Eggs Benedict' />
				<List.Item title='Classic Breakfast' />
			</List.Accordion>
			<Divider />
			<List.Accordion
				title='Lunch'
				left={(props) => <List.Icon {...props} icon='food' />}
				expanded={openLunch}
				onPress={() => setOpenLunch(!openLunch)}
			>
				<List.Item title='Burger w/ Fries' />
				<List.Item title='Steak Sandwich' />
				<List.Item title='Mushroom Soup' />
			</List.Accordion>
			<Divider />
			<Divider />

			<List.Accordion
				title='Dinner'
				left={(props) => <List.Icon {...props} icon='food-variant' />}
				expanded={openDinner}
				onPress={() => setOpenDinner(!openDinner)}
			>
				<List.Item title='Spaghetti Bolognese' />
				<List.Item title='Veal Cutlet with Chicken Mushroom Rotini' />
				<List.Item title='Steak Frites' />
			</List.Accordion>
			<Divider />

			<List.Accordion
				title='Drinks'
				left={(props) => <List.Icon {...props} icon='cup' />}
				expanded={openDrinks}
				onPress={() => setOpenDrinks(!openDrinks)}
			>
				<List.Item title='Coffee' />
				<List.Item title='Tea' />
				<List.Item title='Modelo' />
				<List.Item title='Wine' />
				<List.Item title='Beer' />
			</List.Accordion>
		</ScrollView>
	);
};

export default RestaurantMenu;
