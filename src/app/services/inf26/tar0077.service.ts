import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Tar0077Service {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getTar0077View02(token): Observable<any> {
    // console.log(this.url + GLOBAL.tar0077view2 + '?authToken=' + token);
    return this._http.get(this.url + GLOBAL.tar0077view2 + '?authToken=' + token);
  }

  getTar0077View03(token, codigo): Observable<any> {
    return this._http.get(this.url + GLOBAL.tar0077view3 + '?authToken=' + token + '&wscodi=' + codigo);
  }

}
