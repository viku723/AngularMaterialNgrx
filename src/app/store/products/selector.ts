import { createSelector } from '@ngrx/store';
import { AppState } from './reducer';

export const productSearch = createSelector(
    (state: {product: AppState}) => state.product.products,
    (products, props) => {
        return products.filter((p) => {
            return p.name.toLowerCase().includes(props.searchText.toLowerCase());
        });
    }
);
