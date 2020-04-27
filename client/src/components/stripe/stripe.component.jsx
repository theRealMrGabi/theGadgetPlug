import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/logo.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ZPFtjfPNLE3en69q1R459eTI00MBbOWKel';
    const onToken = token => {
        axios({
            url: 'checkout',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            // console.log(response);
            alert('payment successful');
        }).catch(error => {
            // console.log('payment error: ' , error)
            alert('there was an issue with your payment');
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='theGadgetPlug'
            billingAddress
            shippingAddress
            image= {logo}
            description={`your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton ;