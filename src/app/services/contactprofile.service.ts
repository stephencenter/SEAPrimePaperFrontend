import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactProfile } from '../models/ContactProfile';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactProfileService {

  constructor(private _http: HttpClient) { }

  getContact() {
    return this._http.get(`${APIURL}/Contact`, { headers: this.getHeaders() });
  }
  
  createContactInfo(regContactData: ContactProfile){
    return this._http.post(`${APIURL}/Contact`, regContactData, { headers: this.getHeaders()});
  }

  getContactProfile(id: string){
    return this._http.get(`${APIURL}/Contact/${id}`, { headers: this.getHeaders() });
  }

  updateContact(contact: ContactProfile){
    return this._http.put(`${APIURL}/Contact`, contact, { headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
