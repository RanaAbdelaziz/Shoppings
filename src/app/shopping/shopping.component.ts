import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  productsInCart;
  constructor(private store:Store<any>) { }

  ngOnInit() {
    this.store.subscribe(state => {
     this.productsInCart = state.products.Cart.cartProducts.length;
    });

  }

}
