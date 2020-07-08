import { mimeType } from './../../../utils/mime-type.validator';
import { ProductsService } from './../../../services/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-product-crud-operations-update-only',
  templateUrl: './admin-product-crud-operations-update-only.component.html',
  styleUrls: ['./admin-product-crud-operations-update-only.component.css'],
})
export class AdminProductCrudOperationsUpdateOnlyComponent implements OnInit {
  constructor(private service: ProductsService) {}
  imagePreview: string;

  productUpdation = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required, [mimeType]),
    companyName: new FormControl('', Validators.required),
    productType: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  pickImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.productUpdation.patchValue({ image: file });
    this.productUpdation.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  updateProdData() {
    console.log(this.productUpdation.value);
    //here to send data to server
    this.service.updateProduct(
      this.productUpdation.value.name,
      this.productUpdation.value.image,
      this.productUpdation.value.companyName,
      this.productUpdation.value.productType,
      this.productUpdation.value.price,
      this.productUpdation.value.description
    );

    this.productUpdation.reset();
  }
  ngOnInit(): void {}
}
