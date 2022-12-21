import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveImage() {
    return this.http.post
  }

  getProducts() {
    return this.http.get(environment.serverUrl + '/api/products') as Observable<Product[]>;
  }

  getProduct(id: number) {
    return this.http.get(environment.serverUrl + '/api/product/' + id) as Observable<Product>;
  }

  saveProduct(product: Product) {
    return this.http.post(environment.serverUrl + '/product', product) as Observable<Product>;
  }

  deleteProduct(id: number) {
    return this.http.delete(environment.serverUrl + '/product/' + id) as Observable<Product>;
  }

  updateProduct(p: Product) {
    return this.http.put(environment.serverUrl + '/product', p) as Observable<Product>;
  }

}
