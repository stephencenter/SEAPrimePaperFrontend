import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactProfile } from '../models/ContactProfile';

const ApiUrl = 'https://localhost:44311/api'
@Injectable({
  providedIn: 'root'
})
export class ContactProfileService {

  constructor(private _http: HttpClient) { }

  createContactInfo(regContactData: ContactProfile){
    return this._http.post(`${ApiUrl}/Contact`, regContactData, { headers: this.getHeaders()});

  }

  getContactProfile(){
    return this._http.get(`${ApiUrl}/Contact`, { headers: this.getHeaders() });
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
