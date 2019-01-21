import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from '../models/CartItem';

const ApiUrl = 'https://localhost:44311/api'

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private _http: HttpClient) { }

  addCart(cartItem: CartItem){
    return this._http.post(`${ApiUrl}/Cart`, cartItem, {headers: this.getHeaders()})
  }

  getCart() {
    return this._http.get(`${ApiUrl}/Cart`, { headers: this.getHeaders() });
  }

  deleteCart(cart_id: number){
    console.log(cart_id)
    return this._http.delete(`${ApiUrl}/Cart/${cart_id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
