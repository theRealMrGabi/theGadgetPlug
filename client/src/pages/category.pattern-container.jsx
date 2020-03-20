import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import LoadingSpinner from '../components/loading-spinner/loading-spinner';
import CategoryPage from './category';
import {compose} from 'redux';
import { selectIsProductLoaded } from '../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsProductLoaded(state)
})

const CategoryPatternContainer = compose(
    connect(mapStateToProps),
    LoadingSpinner
)(CategoryPage)

export default CategoryPatternContainer