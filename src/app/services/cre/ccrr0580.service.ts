import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Ccrr0580Service {
  public url: string;
  public endpointV1: String;
  public endpointV2: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.ccrr0580view01;
    this.endpointV2 = GLOBAL.ccrr0580view02;
   }

  getCcrr0580View01(token, NUMCRE): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&NUMCRE=' + NUMCRE);
  }

  getCcrr0580View02(token, NUMCRE): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token + '&NUMCRE=' + NUMCRE);
  }

}
