import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import ShopCollection from '../components/shop-collection/shop-collection';
import { selectShopCategory } from '../redux/shop/shop.selector';

const CategoryPage = ({ products: { title, items }} ) => {
    
    return (
        <CategoryContainer>
            <h2 className="title mx-auto text-center my-3 text-capitalize font-weight-bold"> {title} </h2>
            <h2 className="items">
                <div className="row">
                {
                    items.map(item => (
                        <ShopCollection key={item.id} items={item} />
                    ))
                }
                </div>
            </h2>
        </CategoryContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    products: selectShopCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);

const CategoryContainer = styled.div `

    .items{
        display: flex;
        justify-content: space-evenly;
    }
`;