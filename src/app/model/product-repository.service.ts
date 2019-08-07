import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductDatasourceService } from './product-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
  private products: Product[] = [];
  private categories: string[] = [];
  private scale: string[] = [];
  private ventor: string[] = [];

  constructor(private dataSourceService: ProductDatasourceService) {
    dataSourceService.getProducts().subscribe((response) => {
      this.products = response['products'];
      this.categories = response['products'].map(p => p.productLine).filter((c, index, array) => array.indexOf(c) === index).sort();
      this.scale = response['products'].map(p => p.productScale).filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
      this.ventor = response['products'].map(p => p.productVendor).filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);

    });
  }

  getProducts(productLine: string = null, productScale: string = null, productVentor: string = null): Product[] {
    return this.products.filter((product) => productLine == null || product.productLine === productLine)
      .filter(product => productScale == null || product.productScale === productScale)
      .filter(product => productVentor == null || product.productVendor === productVentor);
  }

  getCategories(): string[] {
    return this.categories;
  }
  getScalas(): string[] {
    return  this.scale;
  }
  getVentor(): string[] {
    return this.ventor;
  }
}
