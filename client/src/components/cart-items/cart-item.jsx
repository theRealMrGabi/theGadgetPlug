import React from 'react'
import CartItemContainer from './cart-items.styles'

const CartItem = ({ item: { img, price, title, quantity }}) => {
    return (
        <CartItemContainer>
            <img src={img} className="img-thumbnail img-round" alt="item"/>
            <div className="item-details">
                <span className="title">{title}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </CartItemContainer>
    )
}

export default CartItem
