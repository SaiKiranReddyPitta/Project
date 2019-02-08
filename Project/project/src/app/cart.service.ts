import { Injectable } from '@angular/core';
import { ProductsService} from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  prods = [];
  cartArr = []
  constructor(public data : ProductsService) { 
    this.data.getData().subscribe((x)=> {this.prods = x});
  }
  addCartItem(index){
    this.cartArr.push(this.prods[index]);
    console.log(this.cartArr);
  }
  getCartItem(){
    return this.cartArr;
  }
}
