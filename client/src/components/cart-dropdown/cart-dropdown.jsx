import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from 'redux';
import CartDropdownContainer from './cart-dropdown.styles';
import { ButtonContainer } from '../button/button';
import CartItem from '../cart-items/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems , history , dispatch}) => {
    return (
        <CartDropdownContainer>
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                        <span className="empty-message">Your Cart is Empty</span>
                    )
                }
            </div>
                <ButtonContainer tertiary
                onClick={() => { history.push('/checkout');
                    dispatch(toggleCart())
                }}
                className="button font-weight-bold">
                    CHECKOUT
                </ButtonContainer>
        </CartDropdownContainer>
    )
}

/**
 * for performance purpose the mapStateToProps in this comment will be replaced with the one below. 
 * * The reason why the code below is replaced with a "reselect" is because regardless of whatever state is being called,
 * *the mapStateToProps is always re-rendered.
 * const mapStateToProps = state => ({
 * cartItems: state.cart.cartItems
 * })
 */

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

const CartDropdownCompose = compose(
    withRouter,
    connect(mapStateToProps)
)(CartDropdown) ;

export default CartDropdownCompose ;