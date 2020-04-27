import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart' , 'user']
}

const rootReducer = combineReducers({
    cart: CartReducer ,
    shop: shopReducer,
    user: userReducer
})

export default persistReducer(persistConfig , rootReducer) ;