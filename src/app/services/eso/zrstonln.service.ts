import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class ZrstonlnService {
  public url: string;
  public endpointV1: String;
  public endpointV2: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.Zrstonlnview01;
    this.endpointV2 = GLOBAL.Zrstonlnview02;
  }

  getZrstonlnView01(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

  getZrstonlnView02(token, w1afac, w1cifa, w1agig, w1orgn, w1prcd, w1acns, w1cans, w1bbad, w1bbah, w1ebad,
w1ebah, w1cydu, w1obol, w1estc, w1cacl, w1cpos, w1retr, w1func, w1crba, w1logo): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token + '&MEORGND=' + w1afac);
  }

}
