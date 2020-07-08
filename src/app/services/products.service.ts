import { Product } from './../models/product-models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productUrl = 'http://localhost:3000/api/v1/products';

  private products: Product[] = [];
  private productsUpdated = new Subject<Product[]>();

  constructor(private http: HttpClient) {}
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };
  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.productUrl);
  }
  getOneProduct(id): Observable<any> {
    return this.http.get<any>(this.productUrl + '/' + id);
  }

  createProduct(
    name: string,
    image: string | File,
    companyName: string,
    productType: string,
    price: string,
    description: string
  ) {
    const productCard = new FormData();
    productCard.append('name', name);
    productCard.append('image', image);
    productCard.append('companyName', companyName);
    productCard.append('productType', productType);
    productCard.append('price', price);
    productCard.append('description', description);
    this.http
      .post<{ product: Product }>(
        this.productUrl,
        productCard
        // this.httpOptions
      )
      .subscribe((resultCard) => {
        const product: Product = {
          name: name,
          image: resultCard.product.image,
          companyName: companyName,
          productType: productType,
          price: price,
          description: description,
        };
        this.products.push(product);
        this.productsUpdated.next([...this.products]);
      });
  }

  updateProduct(
    name?: string,
    image?: string | File,
    companyName?: string,
    productType?: string,
    price?: string,
    description?: string
  ) {
    let updateProduct = {
      name: name,
      image: image,
      companyName: companyName,
      productType: productType,
      price: price,
      description: description,
    };

    this.http
      .patch<{ product: Product }>(
        this.productUrl,
        updateProduct
        // this.httpOptions
      )
      .subscribe((updatedData) => {
        console.log(updatedData);
      });
  }
  deleteProduct(deleteId) {
    this.http.delete<any>(this.productUrl + '/' + deleteId).subscribe((res) => {
      console.log(res + 'was deleted siccessfully');
    });
  }

  getProdStats(): Observable<any> {
    return this.http.get<any>(this.productUrl + '/products-statistics');
  }
  topRatedProd(): Observable<any> {
    return this.http.get<any>(this.productUrl + '/top-rated-products');
  }
  // review on products special routes
  createRevOnProduct(prodId, revData?) {
    this.http
      .post<any>(
        this.productUrl + '/' + prodId + '/review',
        revData
        // this.httpOptions
      )
      .subscribe((revData) => {
        console.log(revData);
      });
  }

  getRevOnProdSpecific(prodId) {
    return this.http.get<any>(this.productUrl + '/' + prodId + '/reviews');
  }
}
