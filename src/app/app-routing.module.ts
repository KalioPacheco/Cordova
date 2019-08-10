import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreComponent} from './store/store.component';
import {CartComponent} from './store/cart/cart.component';
import {CheckoutComponent} from './store/checkout/checkout.component';
import {PageNotFoundComponent} from './store/page-not-found/page-not-found.component';
import {DetailsComponent} from './store/details/details.component';
const routes: Routes = [
  {
    path: 'store' , component: StoreComponent
  },
  {
    path: 'store/:id' , component: DetailsComponent
  },
  {
    path: 'cart' , component: CartComponent
  },
  {
    path: 'checkout' , component: CheckoutComponent
  },
  {
    path: '' , redirectTo: '/store', pathMatch: 'full'
  },
  {
    path: '**' , component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
