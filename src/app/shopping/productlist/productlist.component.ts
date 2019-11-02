import { Component, OnInit } from '@angular/core';
import { Subscriber, range } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions/actions'
import * as _ from "lodash";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  Products;
  AllProducts;
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  pages: number[];
  pagesCount: number;
  categories;
  filterOptions={
    maxPrice:1000,
    minPrice:0,
    selectedCategory:"All Products"
  };

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentPage = state.products.currentPage;
      this.pageSize = state.products.pageSize;
      this.categories= ["All Products",...state.products.Categories];
     this.AllProducts = state.products.Products;
     this.loadProducts();
    });

  }

  AddToCart(productId, index) {
    this.store.dispatch({ type: actions.ADD_TO_CART, id: productId, index: index })
  }

  onPageChange(page) {
    this.store.dispatch({ type: actions.CHANGE_CURRENT_PAGE, currentPage: page });
  }
  getPagedData = () => {

    
    const filtered =
      this.filterOptions.selectedCategory !='All Products'
        ? this.AllProducts.filter(m => m.category === this.filterOptions.selectedCategory && 
        m.price>this.filterOptions.minPrice && m.price<this.filterOptions.maxPrice)
        : this.AllProducts.filter(m => 
          m.price>this.filterOptions.minPrice && m.price<this.filterOptions.maxPrice);


    const products = this.paginate(filtered, this.currentPage, this.pageSize);

    return { totalCount: filtered.length, data: products };
  };

  paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  }

  loadProducts(){
    const paginationInfo = this.getPagedData();
    this.itemsCount = paginationInfo.totalCount;
    this.Products = paginationInfo.data;
    this.pagesCount = Math.ceil(this.itemsCount / this.pageSize);
    if (this.pagesCount === 1)
      return this.pages = null;
    else
      this.pages = _.range(1, this.pagesCount + 1);
  }
}
