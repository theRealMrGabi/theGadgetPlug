import ShopActionTypes from './shop.type';
import { firestore, convertProductSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchProductsStart = () => ({
    type: ShopActionTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = productMap => ({
    type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: productMap
})

export const fetchProductsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: errorMessage
})


export const fetchProductsStartAsync = () => {
    return dispatch => {
        const productRef = firestore.collection('products')
        dispatch(fetchProductsStart())

        productRef.get().then(snapshot => {
            const productMap = convertProductSnapshotToMap(snapshot);
            dispatch(fetchProductsSuccess(productMap));
        }).catch(error => dispatch(fetchProductsFailure(error.message)))
    }
}