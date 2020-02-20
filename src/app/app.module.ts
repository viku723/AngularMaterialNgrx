import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatInputModule } from '@angular/material';
import * as productReducer from './store/products/reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/products/effetcts';
import { ButtonControlsComponent } from './components/manage-products/button-controls/button-controls.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ManageProductsComponent,
    TableComponent,
    ToolbarComponent,
    ButtonControlsComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    StoreModule.forRoot({ product: productReducer.reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
