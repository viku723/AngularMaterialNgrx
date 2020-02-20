import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as productActions from './actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, map, delay } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
    getProductEffect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(productActions.getProducts),
            delay(1000),
            switchMap(() => {
                return this.http.get('assets/products.json').pipe(
                    map(products => {
                        return {
                            type: '[Manage products] load products success',
                            products
                        };
                    })
                );
            })
        );
    });

    constructor(public action$: Actions, public http: HttpClient) { }
}

