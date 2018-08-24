import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Ccrr0500Service {
  public url: string;
  public endpointV2: String;
  public endpointV3: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV2 = GLOBAL.ccrr0500view02;
    this.endpointV3 = GLOBAL.ccrr0500view03;
   }

  getCcrr0500View02(token, CRCSUC, CRCDIV, CRSTCO): Observable<any> {
    // console.log(this.url + this.endpointV2 + '?authToken=' + token + '&CRCSUC=' + CRCSUC +
    //   '&CRCDIV=' + CRCDIV + '&CRSTCO=' + CRSTCO);
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token + '&crntar=&crcsuc=' + CRCSUC +
      '&crcdiv=' + CRCDIV + '&crstco=' + CRSTCO);
  }

  getCcrr0500View03(token, CRNTAR): Observable<any> {
    // console.log(this.url + this.endpointV3 + '?authToken=' + token + '&crntar=' + CRNTAR);
    return this._http.get(this.url + this.endpointV3 + '?authToken=' + token + '&crntar=' + CRNTAR + '&crcsuc=0&crcdiv=0&crstco=0');
  }

}
