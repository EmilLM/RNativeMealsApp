import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input-plus';
import {cardTokenRequest} from '../../services/checkout/checkout.service'

// pk_test_51IiGBlBLChYrFIj0F8JBHVxMyL9QSFbSTkiFrU7EuQZVBkhNuAZeIopkF4vkxYykmEDN8PFhvzs9sPMCSTw1fI4S00gaAxXySW

const CreditCard = ({name = 'Luchian Emil'}) => {

	const handleChange = (formData) => {
		// console.log(formData);
		const { values, status } = formData;
		const isIncomplete = Object.values(status).includes('incomplete');
        const expiry = values.expiry.split('/')
        const card = {
            number: values.number,
            exp_month: expiry[0],
            exp_year: expiry[1],
            cvc: values.cvc,
            name: name
        }
        const info = cardTokenRequest(card)
	};

	return <LiteCreditCardInput onChange={handleChange} />;
};

export default CreditCard;
