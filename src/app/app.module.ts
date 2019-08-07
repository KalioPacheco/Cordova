import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import {Cart} from './model/cart';
import {CartComponent} from './store/cart/cart.component';
import {CheckoutComponent} from './store/checkout/checkout.component';
import {PageNotFoundComponent} from './store/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    HttpClientModule
  ],
  providers: [
    Cart
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
