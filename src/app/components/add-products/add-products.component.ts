import { switchMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';

import * as productActions from '../../store/products/actions'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  formGroup: FormGroup;
  isEditMode: boolean;

  constructor(
    public store: Store<{product: { products: [{position: number}]}}>,
    public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      position: new FormControl(Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)),
      name: new FormControl(''),
      weight: new FormControl(''),
      symbol: new FormControl('')
    });

    this.activatedRoute.params.pipe(
      switchMap((params) => {
        return this.store.select('product').pipe(
          map(productState => {
            return productState.products.find(p => p.position == params.id)
          })
        );
      })
    ).subscribe((product) => {
      if (product) {
        this.isEditMode = true;
        this.formGroup.setValue(product);
      }
    });
  }

  onAddProduct() {
    if (this.isEditMode) {
      this.store.dispatch(productActions.updateProduct({product: this.formGroup.value}));
    } else {
      this.store.dispatch(productActions.addNewProduct(this.formGroup.value));
    }
    this.router.navigate(['/'])
  }

}
