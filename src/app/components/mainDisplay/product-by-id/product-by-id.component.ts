import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.css'],
})
export class ProductByIdComponent implements OnInit {
  oneProduct;
  revOnProd = [];
  constructor(
    private service: ProductsService,
    private route: ActivatedRoute
  ) {}
  productId: string;
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.productId = paramMap.get('id');
        this.service.getOneProduct(this.productId).subscribe((productData) => {
          let singleProd;
          singleProd = productData.data['data'];
          this.oneProduct = singleProd;

          console.log(this.oneProduct);
          this.service.getRevOnProdSpecific(this.productId).subscribe((res) => {
            let reviews = res;
            this.revOnProd = reviews;
            console.log(reviews);
          });
          // creating review
          // this.service.createRevOnProduct(this.productId,)
        });
      } else {
        this.productId = null;
      }
    });
  }
}
