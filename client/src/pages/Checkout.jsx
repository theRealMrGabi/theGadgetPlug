import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartItemsTotalPrice } from '../redux/cart/cart.selectors';
import CheckOutItem from '../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../components/stripe/stripe.component';
import CheckoutPageContainer from './Checkout.styles';

const Checkout = ({ cartItems, total}) => {
    return (
        <CheckoutPageContainer>
            <div className="checkout-header text-capitalize font-weight-bold">
                <div className="header-block d-none d-md-block">
                    <span>Product</span>
                </div>
                <div className="header-block d-none d-md-block">
                    <span>description</span>
                </div>
                <div className="header-block d-none d-md-block">
                    <span>quantity</span>
                </div>
                <div className="header-block d-none d-md-block">
                    <span>price</span>
                </div>
                <div className="header-block d-none d-md-block">
                    <span>remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }

            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242
                <br />
                EXP: 01/21
                <br />
                CVV: 123
            </div>
            <StripeCheckoutButton price={total} />

        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotalPrice
})

export default connect(mapStateToProps) (Checkout) ;