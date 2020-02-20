import { createAction, props } from '@ngrx/store';

export const getProducts = createAction(
    '[Manage products] load products'
);

export const loadProductsSuccess = createAction(
    '[Manage products] load products success',
    props<{products: []}>()
);

export const addNewProduct = createAction(
    '[Manage products] add new product',
    props<{name: string, weight: string, symbol: string, position: number}>()
);

export const deleteProduct = createAction(
    '[Manage product] delete product',
    props<{ products: {position: number}[] }>()
)

export const updateProduct = createAction(
    '[Manage product] update product',
    props<{product: {position: number}}>()
);

