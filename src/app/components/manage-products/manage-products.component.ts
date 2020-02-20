import { AppState } from './../../store/products/reducer';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as productActions from '../../store/products/actions';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { tap, take, map } from 'rxjs/operators';
import { productSearch } from 'src/app/store/products/selector';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<any>;
  selectedRows = [];

  constructor(private store: Store<{product: AppState }>, public router: Router) { }

  ngOnInit() {
    this.store.select('product').pipe(
      take(1),
      tap(products => {
        if (!products.isProductsFetched) {
          this.store.dispatch(productActions.getProducts());
        }
      })
    ).subscribe();
    this.products$ = this.store.select('product');
  }

  onAddProduct() {
    this.router.navigate(['/add-product'])
  }

  selectionChanged(items) {
    this.selectedRows = items.source.selected;
  }

  onSearch(searchText) {
    this.products$ = this.store.pipe(
      select(productSearch, { searchText }),
      map((products) => {
        return {
          products
        };
      })
    )
  }
}
