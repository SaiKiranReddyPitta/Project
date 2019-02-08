 import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService} from '../products.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  rview;
  object;
  index;
  name;
  password;
  added:boolean = false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location,
    private cartService: CartService
  ) {
    this.productService.getData().subscribe( x => this.object = x);
    this.index = +this.route.snapshot.paramMap.get('i');
  }

  ngOnInit() {
  }
  addToCart(){
    this.cartService.addCartItem(this.index);
  }

  review() {
    this.productService.addReview(this.index, this.rview);
  }

}
