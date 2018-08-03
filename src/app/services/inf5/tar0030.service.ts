import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Tar0030Service {
  public url: string;
  public endpoint01: String;
  public endpoint02: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    this.endpoint01 = GLOBAL.tar0030view1;
    this.endpoint02 = GLOBAL.tar0030view2;
  }

  getTar0030View01(token, tar0030Cuenta): Observable<any> {
    return this._http.get(this.url + GLOBAL.tar0030view1 + '?authToken=' + token + '&ctacta=' + tar0030Cuenta);
  }

  getTar0030View02(token, tar0030Cuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint02 + '?authToken=' + token + '&ctacta=' + tar0030Cuenta );
  }

}
