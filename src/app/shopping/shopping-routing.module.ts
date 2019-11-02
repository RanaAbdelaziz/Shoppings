import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartlistingComponent } from './cartlisting/cartlisting.component';

const routes: Routes = [
  {
    path : '',
    component : ShoppingComponent,
    children : [
      {
        path : '',
        component : ProductlistComponent
      },
      {
        path : 'yourCart',
        component : CartlistingComponent
      }
    ]
   
  },

  
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
