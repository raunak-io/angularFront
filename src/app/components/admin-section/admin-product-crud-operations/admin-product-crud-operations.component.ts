import { mimeType } from './../../../utils/mime-type.validator';
import { ProductsService } from './../../../services/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-product-crud-operations',
  templateUrl: './admin-product-crud-operations.component.html',
  styleUrls: ['./admin-product-crud-operations.component.css'],
})
export class AdminProductCrudOperationsComponent implements OnInit {
  constructor(private service: ProductsService) {}
  imagePreview: string;
  
  product = [];
  ngOnInit() {
    this.service.getAllProducts().subscribe((comingProd) => {
     
      let products = comingProd.data['data'];
     
      this.product = products;
    });
  }
  onDeleteProd(prodId, prodName) {
    this.product.find(prodName).pop();

    this.service.deleteProduct(prodId);
  }

  createProduct = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required, [mimeType]),
    companyName: new FormControl('', Validators.required),
    productType: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  pickImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createProduct.patchValue({ image: file });
    this.createProduct.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  createCard() {
    console.log(this.createProduct.value);
    
    if (this.createProduct.invalid) {
      return;
    }
    this.service.createProduct(
      this.createProduct.value.name,
      this.createProduct.value.image,
      this.createProduct.value.companyName,
      this.createProduct.value.productType,
      this.createProduct.value.price,
      this.createProduct.value.description
    );
    
    this.createProduct.reset();
  }
}
