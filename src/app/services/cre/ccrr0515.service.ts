import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Ccrr0515Service {
  public url: string;
  public endpointV1: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.ccrr0515view01;
   }

  getCcrr0515View01(token, NUMCRE): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&NUMCRE=' + NUMCRE);
  }

}
