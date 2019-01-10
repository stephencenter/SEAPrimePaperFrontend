import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';

const ApiUrl = 'https://localhost:44311/api'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(`${ApiUrl}/Product`, { headers: this.getHeaders() });
  }

  createProduct(product: Product) {
    return this._http.post(`${ApiUrl}/Product`, product, {headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', ` Bearer ${localStorage.getItem('id_token')}`);
  }
}
