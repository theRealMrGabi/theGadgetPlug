import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import styled from 'styled-components';
import { selectCartItems, selectCartItemsTotalPrice } from '../redux/cart/cart.selectors';
import CheckOutItem from '../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../components/stripe/stripe.component';
// import PaystackCheckoutButton from './../components/paystack/paystack';


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

export default connect(mapStateToProps) (Checkout)

const CheckoutPageContainer = styled.div `
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      margin: 1rem;
      padding: 1rem;
      font-size: 1.5rem;
      width: 40%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  .test-warning{
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
  }
`