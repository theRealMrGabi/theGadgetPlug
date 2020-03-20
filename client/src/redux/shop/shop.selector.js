import {createSelector} from 'reselect';

const selectShop = state => state.shop ;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.products
)

export const selectShopItemsForOverview = createSelector(
    [selectShopItems],
    products => products ? Object.keys(products).map(key => products[key]) : []
);

export const selectShopCategory = categoryUrlParam => createSelector(
    [selectShopItems],
    // data normalization
    products => (products ? products[categoryUrlParam] : null)
)

export const selectIsProductFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsProductLoaded = createSelector(
    [selectShop],
    shop => !!shop.products
)
/**
 export const selectShopCategory = categoryUrlParam => createSelector(
     [selectShopItems],
     products => products.find(
         product => product.id === CATEGORY_ID_MAP[categoryUrlParam]
     )
 ) 
 */