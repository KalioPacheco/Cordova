import { Component, OnInit } from '@angular/core';
import {Cart} from '../../model/cart';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: Cart, private route: ActivatedRoute,
              private router: Router
  ) { }
  ngOnInit() {
  }

  Carrito(){
    this.router.navigate(['/cart']);

  }
}
