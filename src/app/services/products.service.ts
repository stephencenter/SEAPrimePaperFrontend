import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private _http: HttpClient) { }

  createProduct(product: Product) {
    return this._http.post(`${APIURL}/Product`, product, {headers: this.getHeaders()});
  }

  getProducts() {
    return this._http.get(`${APIURL}/Product`, { headers: this.getHeaders() });
  }  

  getProduct(id: string) {
    return this._http.get(`${APIURL}/Product/${id}`, { headers: this.getHeaders() });
  }

  updateProduct(product: Product){
    return this._http.put(`${APIURL}/Product`, product, { headers: this.getHeaders() });
  }

  deleteProduct(id: number){
    return this._http.delete(`${APIURL}/Product/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
