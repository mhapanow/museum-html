import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class CgrrcrecService {
  public url: string;
  public endpoint01: String;
  public endpoint02: String;
  public endpoint03: String;
  public endpoint04: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    this.endpoint01 = GLOBAL.cgrrcrecview1;
    this.endpoint02 = GLOBAL.cgrrcrecview2;
    this.endpoint03 = GLOBAL.cgrrcrecview3;
    this.endpoint04 = GLOBAL.cgrrcrecview4;
   }

  getCgrrcrecView01(token, cgrrcrecCuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint01 + '?authToken=' + token + '&acctno=' + cgrrcrecCuenta);
  }

  getCgrrcrecView02(token, cgrrcrecCuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint02 + '?authToken=' + token + '&acctno=' + cgrrcrecCuenta);
  }

  getCgrrcrecView03(token, cgrrcrecCuenta): Observable<any> {
    return this._http.get(this.url + this.endpoint03 + '?authToken=' + token + '&aamcue=' + cgrrcrecCuenta);
  }

  getCgrrcrecView04(token, Ccte, Numch, Imp, Nrtr): Observable<any> {
    return this._http.get(this.url + this.endpoint04 + '?authToken=' + token + '&ccte=' + Ccte + '&numch=' + Numch + '&imp=' + Imp + '&nrtr=' + Nrtr);
  }


}
