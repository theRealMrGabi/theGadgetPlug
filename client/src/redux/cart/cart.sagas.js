import {all, call, takeLatest, put} from 'redux-saga/effects';
// import CartActionTypes from './cart.types';
import { clearCart } from './cart.actions';
import userActionType from '../user/user.type';

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}