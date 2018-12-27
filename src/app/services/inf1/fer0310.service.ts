import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Fer0310Service {
 	public url: string;
 	public endpoint01: String;
 	public endpoint02: String;
 	public endpoint03: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    this.endpoint01 = GLOBAL.fer0310view1;
    this.endpoint02 = GLOBAL.fer0310view2;
    this.endpoint03 = GLOBAL.fer0310view3;
  }

  getFer0310View01(token, fer0310Cuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint01 + '?authToken=' + token + '&acctno=' + fer0310Cuenta);
  }

  getFer0310View02(token, fer0310Cuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint02 + '?authToken=' + token + '&acctno=' + fer0310Cuenta);
  }

  getFer0310View03(token, fer0310Cuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint03 + '?authToken=' + token + '&acctno=' + fer0310Cuenta);
  }
  

}
