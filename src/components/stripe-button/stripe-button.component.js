import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51GugsEJT7T9v9ES6MrZ654s7EkAnT3oytt3rRctOnskcU5a3P3qgeIbeZP3SHMGMwqhKzAlnsUdupgvRwJrtRBTJ000h8bKDQi'

   const onToken = token =>{
        console.log(token);
        alert('Payment Succesful')
    };

    return(
        <StripeCheckout 
        label='Pay Now'
        name='Crown Project'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
        />
    )
};

export default StripeCheckoutButton
