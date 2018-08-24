import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class ZrstrecmService {
  public url: string;
  public endpointV1: String;
  public endpointV2: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.Zrstrecmview01;
    this.endpointV2 = GLOBAL.Zrstrecmview02;
   }

  getZrstrecmView01(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

  getZrstrecmView02(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

}
