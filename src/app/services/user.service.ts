import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
 import { UserModel } from '../models/user.models';

@Injectable()
export class UserService {
  public url: string;
  public identity;
  public token;
  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  registrarUsuario(user): Observable<any> {
    const json = JSON.stringify(user);
    const params = json;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'register', params, { headers });
  }

  iniciarSesion(user, getToken = null): Observable<any> {
    if (getToken != null) {
      user.getToken = 'true';
    }
    const json = JSON.stringify(user);
    const params = json;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + GLOBAL.auth, params, { headers });
    // return this._http.get(this.url + 'auth.json');
    }

  cerrarSesion(): Observable<any> {
    const tokens = this.getToken();
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // console.log('Logout: ' + (this.url + 'auth?authToken=' + tokens));
     return this._http.delete(this.url + 'auth?authToken=' + tokens, { headers } );
    // return this._http.get(this.url + 'auth.json');
  }

    getIdentity() {
      const identity = JSON.parse(localStorage.getItem('identity'));
      if (identity !== 'undefined') {
        this.identity = identity;
      } else {
        this.identity = null;
      }
      return this.identity;
    }

    getToken() {
      const token = localStorage.getItem('token');
      if (token !== 'undefined') {
        this.token = token;
      } else {
        this.token = null;
      }
      return this.token;
    }

  }
