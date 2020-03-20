import ShopActionTypes from './shop.type';
import {takeLatest , call , put, all} from 'redux-saga/effects';
import { firestore, convertProductSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchProductsSuccess, fetchProductsFailure } from './shop.action';


export function* fetchProductsAsync(){
    
   try{
       const productRef = firestore.collection('products');
       const snapshot = yield productRef.get();
       const productMap = yield call(convertProductSnapshotToMap, snapshot );
       yield put(fetchProductsSuccess(productMap));
   } catch(error){
       yield put(fetchProductsFailure(error.message))
   }
}

export function* fetchProductsStart(){
    yield takeLatest(ShopActionTypes.FETCH_PRODUCTS_START, fetchProductsAsync );
}

export function* shopSagas(){
    yield all([
        call(fetchProductsStart)
    ])
}