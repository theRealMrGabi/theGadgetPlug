import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import ShopOverviewContainer from './shop-overview.styles';
import { selectShopItemsForOverview } from '../../redux/shop/shop.selector';
import ShopPreview from '../shop-preview/shop-preview';

const ShopOverview = ({ products }) => {
    return (
        <ShopOverviewContainer>
            {
                products.map(({ id, ...otherProps }) => (
                    <ShopPreview key={id} {...otherProps} />
                ))
            }
        </ShopOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    products: selectShopItemsForOverview
})

export default connect(mapStateToProps) (ShopOverview) ;