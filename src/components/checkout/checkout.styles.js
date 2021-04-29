import styled from 'styled-components/native';
import { Avatar, TextInput, Button } from 'react-native-paper';
import { colors } from '../../utils/theme/colors';

export const CartIconContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
	size: 128,
})`
	background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
	margin-bottom: ${(props) => props.theme.sizes[2]};
`;

export const NameInput = styled(TextInput)`
	margin: ${(props) => props.theme.sizes[2]};
`;
export const AdressInput = styled(TextInput)`
	margin: 4px 8px 8px 8px;
`;
export const PayButton = styled(Button).attrs({
	contentStyle: {
		width: '100%',
		padding: 8,
	},
	color: colors.brand.primary,
})`
	margin: ${(props) => props.theme.sizes[2]}
	margin-top: 14px;
    justify-content: center;
	align-self: center;
    width: 80%;
`;
export const ClearButton = styled(Button).attrs({
	contentStyle: {
		width: '100%',
		padding: 8,
	},
	color: colors.text.error,
})`
	margin: ${(props) => props.theme.sizes[2]}
    justify-content: center;
	align-self: center;
    width: 80%;
`;
