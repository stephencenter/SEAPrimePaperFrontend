import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactProfile } from '../models/ContactProfile';

const ApiUrl = 'https://primepaper.azurewebsites.net/api'
@Injectable({
  providedIn: 'root'
})
export class ContactProfileService {

  constructor(private _http: HttpClient) { }

  getContact() {
    return this._http.get(`${ApiUrl}/Contact`, { headers: this.getHeaders() });
  }
  
  createContactInfo(regContactData: ContactProfile){
    return this._http.post(`${ApiUrl}/Contact`, regContactData, { headers: this.getHeaders()});
  }

  getContactProfile(id: string){
    return this._http.get(`${ApiUrl}/Contact/${id}`, { headers: this.getHeaders() });
  }

  updateContact(contact: ContactProfile){
    return this._http.put(`${ApiUrl}/Contact`, contact, { headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
