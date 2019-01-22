import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from '../models/CartItem';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private _http: HttpClient) { }

  addCart(cartItem: CartItem){
    return this._http.post(`${APIURL}/Cart`, cartItem, {headers: this.getHeaders()})
  }

  getCart() {
    return this._http.get(`${APIURL}/Cart`, { headers: this.getHeaders() });
  }

  deleteCart(cart_id: number){
    console.log(cart_id);
    let foo = this._http.delete(`${APIURL}/Cart/${cart_id}`, { headers: this.getHeaders() });
    console.log(foo);
    return foo;
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
