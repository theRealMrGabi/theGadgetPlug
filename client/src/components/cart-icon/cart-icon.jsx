import React from 'react';
import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg';
import CartIconContainer from './cart-icon.styles';
import { toggleCart } from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ButtonContainer } from '../button/button';


const CartIcon = ({ toggleCart, itemCount}) => {
    return (
        <CartIconContainer onClick={toggleCart}>
            <ButtonContainer className="button">
                <ShopIcon className="shop-icon" />
                <span className="item-count font-weight-bold">{itemCount}</span>
            </ButtonContainer>
        </CartIconContainer>
    )
}

/**
 * for performance purpose the mapStateToProps in this comment will be replaced with the one below
 * const mapStateToProps = ({cart: {cartItems} }) => ({
 *  itemCount: cartItems.reduce((accumulatedQty, cartItm) => accumulatedQty + cartItem.quantity, 0)
 * })
 */

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart()) 
});

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon) ;