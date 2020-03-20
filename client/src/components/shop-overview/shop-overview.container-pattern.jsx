import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect'
import { selectIsProductFetching } from '../../redux/shop/shop.selector';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import ShopOverview from './shop-overview';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsProductFetching
});

const ShopOverviewContainerPattern = compose(
    connect(mapStateToProps),
    LoadingSpinner
)(ShopOverview)

export default ShopOverviewContainerPattern ;