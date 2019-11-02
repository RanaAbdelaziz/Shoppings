import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../../store/actions/actions'

@Component({
  selector: 'app-cartlisting',
  templateUrl: './cartlisting.component.html',
  styleUrls: ['./cartlisting.component.css']
})
export class CartlistingComponent implements OnInit {
Products:[];
totalPrice;
  constructor(private store:Store<any>) { }

  ngOnInit() {
    this.store.subscribe(state=>{
      this.Products = state.products.Cart.cartProducts;
      this.totalPrice = state.products.Cart.totalPrice
    }); 
  }
  IncQuantity(index){
    this.store.dispatch({type:actions.INC_QUANTITY,index:index});
  }
  DecQuantity(index){
    this.store.dispatch({type:actions.DEC_QUANTITY,index:index});
  }
  RemoveItem(index){
    this.store.dispatch({type:actions.REMOVE_ITEM,index:index});
  }
}
