import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart} from './cart.utils';

const initialState = {
    hidden: true,
    cartItems: [],
}

const CartReducer = (state = initialState, action ) => {
    switch (action.type) {

    case CartActionTypes.TOGGLE_CART:
        return{
            ...state,
            hidden: !state.hidden
        };

    case CartActionTypes.ADD_ITEM:
        return{
            ...state,
            // cartItems: [...state.cartItems , action.payload]
            cartItems: addItemToCart(state.cartItems , action.payload)
        };

    case CartActionTypes.REMOVE_ITEM:
        return{
            ...state,
            cartItems: removeItemFromCart(state.cartItems , action.payload)
        };

    case CartActionTypes.CLEAR_ITEM:
        return{
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }

    case CartActionTypes.CLEAR_CART:
        return{
            ...state,
            cartItems: []
        }

    default:
        return state
    }
}

export default CartReducer ;