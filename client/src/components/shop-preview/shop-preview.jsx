import React from 'react'
import ShopCollection from '../shop-collection/shop-collection';
import ShopPreviewStyle from './shop-preview.styles';

const ShopPreview = ({ title, items}) => {
    
    return (
        <React.Fragment>
            <ShopPreviewStyle>
                <div className="shop-preview px-3">
                    <h1 className="title mx-auto text-center my-3">{title.toUpperCase()}</h1>
                    <div className="preview row d-flex justify-content-between">
                        {
                            items.filter((item, idx) => idx < 4)
                                .map(items => (
                                    <ShopCollection key={items.id} items={items} />
                                ))
                        }
                    </div>
                </div>
            </ShopPreviewStyle>
        </React.Fragment>
    )
}

export default ShopPreview ;