import {Injectable} from '@angular/core';
import {Product} from './product';

@Injectable()
export class Cart {
  private lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  deleteLine(product: Product) {
    const line = this.lines.findIndex(line => line.product.productCode === product.productCode);
    if (line === undefined) {
      console.log('Que elimino Bro')
    } else {
      this.lines.splice(line,1);
    }
    this.recalculate();
  }
  addLine(product: Product, quatity: number = 1) {
    const line = this.lines.find(line => line.product.productCode === product.productCode);
    if (line === undefined) {
      this.lines.push(new CartLine(product, quatity));
    } else {
      line.quantity += quatity;
    }
    this.recalculate();
  }
  ModificarQuatity(product: Product, quatity: number) {
    const line = this.lines.find(line => line.product.productCode === product.productCode);
    if (line === undefined) {
     console.log('No existe este producto')
    } else {
      line.quantity = quatity;
    }
    this.recalculate();
  }
  recalculate() {
     this.itemCount = 0;
     this.cartPrice = 0;
     this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += l.quantity * l.product.MSRP;
    });
  }
  getArray() {
    return this.lines.slice();
  }
}
export class CartLine {
  constructor(public product: Product, public quantity: number){}
  get lineTotal(): number {
    return this.quantity * this.product.MSRP;
  }
}
