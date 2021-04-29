import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

export const FavouritesWrapper = styled(Card)`
	z-index: 999;
`;
export const EmptyFavContainer = styled.View`
	padding: 10px;
	height: 120px;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

export const FavouriteButton = styled(TouchableOpacity)`
	position: absolute;
	top: 30px;
	right: 30px;
	z-index: 9;
`;
