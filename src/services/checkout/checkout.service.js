import createStripe from 'stripe-client';

const stripe = createStripe(
	'pk_test_51IiGBlBLChYrFIj0F8JBHVxMyL9QSFbSTkiFrU7EuQZVBkhNuAZeIopkF4vkxYykmEDN8PFhvzs9sPMCSTw1fI4S00gaAxXySW'
);

export const cardTokenRequest = async (card) => {
	await stripe.createToken(card);
};
