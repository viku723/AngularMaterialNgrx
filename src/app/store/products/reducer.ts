import { createReducer, on } from '@ngrx/store';

import * as productsActions from './actions';
import { PeriodicElement } from 'src/app/components/table/table.component';

export interface AppState {
    products: PeriodicElement;
    isProductsFetched: boolean;
}

const initialState = {
    products: [],
    isProductsFetched: false
};

const productReducer = createReducer(
    initialState,
    on(productsActions.getProducts, (state) => {
        return {
            ...state,
            isProductsFetched: false,
        }
    }),
    on(productsActions.loadProductsSuccess, (state, payload) => {
        return {
            ...state,
            isProductsFetched: true,
            products: payload.products
        }
    }),
    on(productsActions.addNewProduct, (state, payload) => {
        return {
            ...state,
            products: [
                ...state.products,
                {
                    position: payload.position,
                    name: payload.name,
                    weight: payload.weight,
                    symbol: payload.symbol
                }
            ]
        };
    }),
    on(productsActions.deleteProduct, (state, payload) => {
        return {
            ...state,
            products: state.products.filter((p) => {
                return payload.products.indexOf(p) === -1;
            })
        }
    }),
    on(productsActions.updateProduct, (state, payload) => {
        return {
            ...state,
            products: state.products.map((product) => {
                if (product.position == payload.product.position) {
                    return payload.product;
                }
                return product;
            })
        }
    })
)

export function reducer(state, action) {
    return productReducer(state, action);
}

