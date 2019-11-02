import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store'
import { FormsModule } from '@angular/forms';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartlistingComponent } from './cartlisting/cartlisting.component';
import {ProducListReducer} from '../store/reducer/reducer'
@NgModule({
  declarations: [ShoppingComponent, ProductlistComponent, CartlistingComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    FormsModule,
    StoreModule.forFeature("products",ProducListReducer)
  ]
})
export class ShoppingModule { }
