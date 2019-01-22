import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { APIURL } from 'src/environments/environment.prod';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo = new Subject<{}>();
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router, private _jwtHelper: JwtHelperService) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${APIURL}/Auth/Register`, regUserData);
  }
  
  login(loginInfo){
    return this._http.post(`${APIURL}/Auth/Login`, loginInfo).subscribe( (token: any) =>{
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
    });
  }
  
  currentUser(): string {
    if (localStorage.getItem('id_token'))
    {
      return this._jwtHelper.decodeToken(localStorage.getItem('id_token')).nameid
    }
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this._http.post(`${APIURL}/api/Account/Logout`, { headers: this.setHeader() } );
    this._router.navigate(['/login']);
    return this._http.post('{Api_Url}/logout', {headers: this.setHeader( )});
  }
  

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  
  currentRole(): string {
    if (localStorage.getItem('id_token')){
      return this._jwtHelper.decodeToken(localStorage.getItem('id_token')).role
    }
    return "string"
  }
}
