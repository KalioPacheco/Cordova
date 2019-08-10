import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {Cart} from '../../model/cart';
import {ProductRepositoryService} from '../../model/product-repository.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private subscription: Subscription;
  idP;
  product = [];


  constructor(private route: ActivatedRoute, private productReposService: ProductRepositoryService,) {
    this.route.params.subscribe((params: Params) => {
      this.idP = params['id'];
    });
    this.product.productName = '';
    this.Cargar();
  }

  Cargar() {
    this.product = this.productReposService.getProducts().find(p => p.productCode == this.idP);
    if (this.product === undefined) {
      this.productReposService.product_selected().subscribe(e => {
        this.product = e['products'].find(e => e.productCode == this.idP);
      });
    }
  }

  ngOnInit() {

  }
}
