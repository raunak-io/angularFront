import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../services/products.service';
@Component({
  selector: 'top-rated-prducts',
  templateUrl: './top-rated-prducts.component.html',
  styleUrls: ['./top-rated-prducts.component.css'],
})
export class TopRatedPrductsComponent implements OnInit {
  constructor(private service: ProductsService) {}
  topRated = [];
  isLoading = false;
  ngOnInit(): void {
    this.service.topRatedProd().subscribe((topProducts) => {
      this.isLoading = true;
      let topRatedCard = topProducts.data['data'];
      this.isLoading = false;
      this.topRated = topRatedCard;
    });
  }
}
