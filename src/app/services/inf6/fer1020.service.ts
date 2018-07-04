import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Fer1020Service {
  public url: string;
  public endpointV1: String;
  public endpointV2: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.fer1020view2;
    this.endpointV2 = GLOBAL.fer1020view3;
   }

  getFer1020View02(token, wcta): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&wcta=' + wcta);
  }

  getFer1020View03(token, wbas): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token + '&wbas=' + wbas);
  }

}
