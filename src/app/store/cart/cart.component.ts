import { Component, OnInit } from '@angular/core';
import {Cart} from '../../model/cart';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   Productos;
  constructor(private cart: Cart, private route: ActivatedRoute,
              private router: Router) {
    this.Inicial();
  }

  ngOnInit() {

  }
  Inicial () {
    if (this.cart.getArray().length !== 0) {
      this.Productos = this.cart.getArray();
    } else{
      this.router.navigate(['/store']);
    }
  }
  CambiarCantidad(valor,producto){
   this.cart.ModificarQuatity(producto,valor);
  }
  EliminarProducto(Producto) {
    this.cart.deleteLine(Producto);
    this.Inicial()
  }
}
