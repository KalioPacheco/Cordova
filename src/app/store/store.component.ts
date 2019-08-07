import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../model/product-repository.service';
import { Product } from '../model/product';
import {Cart} from '../model/cart';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;
  public selectedScale = null;
  public selectedVentor = null;
  public prodcutsPerPage = 12;
  public selectPage = 1;
  public pageNumber = [] ;
  public Total;
  constructor(private productReposService: ProductRepositoryService, private cart: Cart) {
  }

  ngOnInit() {}

  get products(): Product[] {
    const pageIndex = (this.selectPage - 1) * this.prodcutsPerPage;
    this.Total = this.productReposService.getProducts(this.selectedCategory, this.selectedScale, this.selectedVentor);
    this.pageNumber =  Array(Math.ceil(this.Total.length / this.prodcutsPerPage))
    .fill(0).map((x, i) => i + 1);
    return this.Total.slice(pageIndex, pageIndex + this.prodcutsPerPage);
  }

  get categories(): string[] {
    return this.productReposService.getCategories();
  }

  changeCategory(newCaetegory?: string) {
    this.selectPage = 1;
    this.selectedCategory = newCaetegory;
  }

  changePage(newNumber: number) {
    this.selectPage = newNumber;
  }

  get Scale(): string[] {
    return this.productReposService.getScalas();
  }
  changeScale(newScale?: string) {
    this.selectPage = 1;
    this.selectedScale = newScale;
  }
  get Ventor(): string[] {
    return this.productReposService.getVentor();
  }
  changeVentor(Ventor?: string) {
    this.selectPage = 1;
    this.selectedVentor = Ventor;
  }
  changePageSezi(newSize: number) {
    this.prodcutsPerPage = newSize;
    this.changePage(1);
  }
  addPtoduct(product: Product) {
    this.cart.addLine(product);
    console.log(this.cart.getArray());
  }
}
