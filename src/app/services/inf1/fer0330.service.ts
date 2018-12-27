import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Fer0330Service {
  public url: string;
  public endpoint01: String;
  public endpoint02: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    this.endpoint01 = GLOBAL.fer0330view1;
    this.endpoint02 = GLOBAL.fer0330view2;
   }

  getFer0330View01(token, fer0330Cuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint01 + '?authToken=' + token + '&wcta=' + fer0330Cuenta);
  }

  getFer0330View02(token, fer0330Cuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint02 + '?authToken=' + token + '&wcta=' + fer0330Cuenta);
  }

  
}
