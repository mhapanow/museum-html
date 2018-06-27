import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';
// import { Tar0030m01Model } from '../../models/tar0030m01.models';

@Injectable()
export class Tar0030Service {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getTar0030View01(token, tar0030Cuenta): Observable<any> {
    /*
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('authToken', token);
                                      */
    /*
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'authToken': token
      })
    };
    */
    // return this._http.get(this.url + GLOBAL.tar0030view1 + '?ctacta=' + tar0030Cuenta, { headers });
    // return this._http.get(this.url + GLOBAL.tar0030view1 + '?ctacta=' + tar0030Cuenta, httpOptions);
    return this._http.get(this.url + GLOBAL.tar0030view1 + '?authToken=' + token + '&ctacta=' + tar0030Cuenta);
    // return this._http.get(this.url + 'TAR030.json');
  }

  getTar0030View02(token, tar0030Cuenta): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('authToken', token);
    // console.log(tar0030Cuenta + ' ' + token);
    // return this._http.get(this.url + 'TAR030', { headers });
    return this._http.get(this.url + 'TAR0302.json');
  }

}
