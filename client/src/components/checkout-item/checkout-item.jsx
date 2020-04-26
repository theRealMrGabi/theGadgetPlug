import React from 'react';
import {connect} from 'react-redux';

import CheckOutItemContainer from './checkout-item.styles';
import { removeItem, addItem, clearItem  } from '../../redux/cart/cart.actions';

const CheckOutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
    const { img, title, price, quantity } = cartItem 
    return (
        <CheckOutItemContainer>
            <div className="image-container">
                <img src={img} alt="item"/>
            </div>
            <span className="name">{title}</span>
            <div className="quantity">
                <div onClick={() => removeItem(cartItem)} data-toggle="tooltip" data-placement="top" title="decrease item">&#10134;</div>
                    {quantity}
                <div className="mx-1" onClick={() => addItem(cartItem)} data-toggle="tooltip" data-placement="top" title="increase item"> &#10010;</div>
            </div>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem) }>&#10006; </div>
        </CheckOutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)) ,
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null , mapDispatchToProps) (CheckOutItem) ;