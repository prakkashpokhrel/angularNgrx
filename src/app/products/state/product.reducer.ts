import { Product } from './../product';

import { createAction, createReducer, on } from "@ngrx/store";

export interface ProductState{
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

export const productReducer = createReducer(
    { showProductCode: true },
    on(createAction('[Product] Toggle product code'), state => {       
        return{ 
            ...state,
            showProductCode: !state.showProductCode
        };
    })    
);
