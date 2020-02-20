import { AddProductsComponent } from './components/add-products/add-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageProductsComponent } from './components/manage-products/manage-products.component';

const routes: Routes = [
  {
    path: '', component: ManageProductsComponent
  },
  {
    path: 'add-product', component: AddProductsComponent
  },
  {
    path: 'edit-product/:id', component: AddProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
