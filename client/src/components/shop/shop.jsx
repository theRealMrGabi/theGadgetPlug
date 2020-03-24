import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchProductsStart } from '../../redux/shop/shop.action';
import ShopOverviewContainerPattern from '../shop-overview/shop-overview.container-pattern';
import CategoryPatternContainer from '../../pages/category.pattern-container';

const Shop = ({ match, fetchProductsStart}) => {

    useEffect(() => {
        fetchProductsStart() ;
    }, [fetchProductsStart])

    return (
        <div className="py-5">
                <Route exact path={`${match.path}`} component={ShopOverviewContainerPattern} />
                <Route path={`${match.path}/:categoryId`} component={CategoryPatternContainer} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProductsStart: () => dispatch(fetchProductsStart())
})

export default connect(null , mapDispatchToProps) (Shop)