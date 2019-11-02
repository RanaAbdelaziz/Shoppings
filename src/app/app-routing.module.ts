import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'Home',
    pathMatch : 'full'
  },
  {
    path : 'Home',
     loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
