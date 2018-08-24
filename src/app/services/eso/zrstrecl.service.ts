import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class ZrstreclService {
  public url: string;
  public endpointV1: String;
  public endpointV2: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.Zrstreclview01;
    this.endpointV2 = GLOBAL.Zrstreclview02;
   }

  getZrstreclView01(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

  getZrstreclView02(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

}
