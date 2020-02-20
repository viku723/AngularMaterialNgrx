import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

import * as productActions from '../../../store/products/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-controls',
  templateUrl: './button-controls.component.html',
  styleUrls: ['./button-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonControlsComponent {

  constructor(public store: Store<{product: {products: []}}>, public router: Router) { }

  @Output() addProduct = new EventEmitter();
  @Output() filter = new EventEmitter();
  @Input() selectedRows: {position: number}[];

  onAddProduct() {
    this.addProduct.emit();
  }

  onDelete(selectedRows) {
    this.store.dispatch(productActions.deleteProduct({products:selectedRows}))
  }

  onEdit(selectedRow) {
    this.router.navigate(['/edit-product/' + selectedRow[0].position]);
  }

  onFilter() {
    this.filter.emit();
  }

}
