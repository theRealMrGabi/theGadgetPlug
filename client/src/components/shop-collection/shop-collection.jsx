import React from 'react';
import {Link} from 'react-router-dom';
import { ButtonContainer } from '../button/button';
import './shop-collection.scss'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const ShopCollection = ({items , addItem}) => {
    const { title, price, img } = items ;

    return (
        <React.Fragment>
            <div className="col-9 col-md-6 col-lg-3 mx-auto my-3 card-container">
                <div className="card">
                    <div className="img-container p-5">
                        <Link to='/details'>
                            <img src={img} className="card-img-top product-img" alt="products" />
                        </Link>
                        <ButtonContainer className="cart-btn" onClick={() => addItem(items)}>
                            <i className="fas fa-cart-plus" />
                        </ButtonContainer>
                    </div>
                </div>

                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0 name">{title}</p>
                    <span className="mr-1 price">${price}</span>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (ShopCollection) ;