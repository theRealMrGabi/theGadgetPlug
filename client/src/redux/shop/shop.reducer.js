import ShopActionTypes from './shop.type';

const initialState = {
    products: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_PRODUCTS_START:
            return{
                ...state,
                isFetching: true
            };
        
        case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                products: action.payload
            };

        case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
            return { 
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };

        default:
            return state
    }
}

export default shopReducer

