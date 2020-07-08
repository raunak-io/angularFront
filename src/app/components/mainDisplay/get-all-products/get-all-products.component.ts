import { ProductsService } from './../../../services/products.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css'],
})
export class GetAllProductsComponent implements OnInit {
  constructor(private service: ProductsService) {}
  products = [];
  isLoading = false;
  ngOnInit(): void {
    this.service.getAllProducts().subscribe((comingProd) => {
      this.isLoading = true;
      let prodCard;
      prodCard = comingProd.data['data'];
      this.isLoading = false;
      this.products = prodCard;
      console.log(this.products);
    });
  }
}
