import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://primepaper.azurewebsites.net/api'

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private _http: HttpClient) { }
  
  getAbout() {
    return this._http.get(`${ApiUrl}/About`, { headers: this.getHeaders() });
  }

  getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('ide_token')}`);
  }
}
