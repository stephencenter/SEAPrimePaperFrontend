import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://localhost:44311/api/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${Api_Url}/Register`, regUserData);

  }
  login(loginInfo){

    return this._http.post(`${Api_Url}/Login`, loginInfo).subscribe( (token: any) =>{
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/'])
    });
  }
  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() } );
    this._router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
