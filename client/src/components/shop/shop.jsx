import React, { useEffect , lazy, Suspense } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchProductsStart } from '../../redux/shop/shop.action';
import Spinner from '../spinner/spinner.component';

const CategoryPatternContainer = lazy(() => import('../../pages/category.pattern-container'));
const ShopOverviewContainerPattern = lazy(() => import('../shop-overview/shop-overview.container-pattern')) ;

const Shop = ({ match, fetchProductsStart}) => {

    useEffect(() => {
        fetchProductsStart() ;
    }, [fetchProductsStart])

    return (
        <div className="py-5">
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} component={ShopOverviewContainerPattern} />
                <Route path={`${match.path}/:categoryId`} component={CategoryPatternContainer} />
            </Suspense>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProductsStart: () => dispatch(fetchProductsStart())
})

export default connect(null , mapDispatchToProps) (Shop)