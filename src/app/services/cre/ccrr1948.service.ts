import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Ccrr1948Service {
  public url: string;
  public endpointV1: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.ccrr1948view01;
  }

  getCcrr1948View01(token, NUMCRE, banco, ncuo, total): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&dinucr=' + NUMCRE + '&dibanc=' + banco
      + '&dincuo=' + ncuo + '&ditota=' + total + '&dimodo=*DSP&didmon=1');
  }

}
