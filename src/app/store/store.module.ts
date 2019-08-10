import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    StoreComponent,
    NavComponent,
    FooterComponent,
    CartSummaryComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StoreComponent
  ],
  providers: [
  ]
})
export class StoreModule { }
