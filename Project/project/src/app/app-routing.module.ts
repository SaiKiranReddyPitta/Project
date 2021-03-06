import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CartComponent} from './cart/cart.component';
import{ LogoComponent} from './logo/logo.component';
import{ ContactusComponent} from './contactus/contactus.component';
const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'product-detail/:i', component:  ProductDetailComponent},
  { path: 'cart/:i', component:  CartComponent },
  { path: 'cart', component:  CartComponent },
  {path: 'logo', component: LogoComponent},
  {path: 'contactus', component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
