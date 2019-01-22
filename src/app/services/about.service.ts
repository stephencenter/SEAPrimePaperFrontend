import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private _http: HttpClient) { }
  
  getAbout() {
    return this._http.get(`${APIURL}/About`, { headers: this.getHeaders() });
  }

  getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('ide_token')}`);
  }
}
