import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class ZrstdspsService {
  public url: string;
  public endpointV1: String;
  public endpointV2: String;
  public endpointV3: String;
  public endpointV4: String;
  public endpointV5: String;
  public endpointV6: String;
  public endpointV7: String;
  public endpointV8: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.Zrstdspsview01;
    this.endpointV2 = GLOBAL.Zrstdspsview02;
    this.endpointV3 = GLOBAL.Zrstdspsview03;
    this.endpointV4 = GLOBAL.Zrstdspsview04;
    this.endpointV5 = GLOBAL.Zrstdspsview05;
    this.endpointV6 = GLOBAL.Zrstdspsview06;
    this.endpointV7 = GLOBAL.Zrstdspsview07;
    this.endpointV8 = GLOBAL.Zrstdspsview08;
  }

  getZrstdspsView01(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

  getZrstdspsView02(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

  getZrstdspsView03(token, categoria): Observable<any> {
    return this._http.get(this.url + this.endpointV3 + '?authToken=' + token + '&MECACLB=' + categoria);
  }

  getZrstdspsView04(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV4 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

  getZrstdspsView05(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV5 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

  getZrstdspsView06(token, ncuenta): Observable<any> {
    return this._http.get(this.url + this.endpointV6 + '?authToken=' + token + '&MEORGND=' + ncuenta);
  }

  getZrstdspsView07(token, descripcion): Observable<any> {
    return this._http.get(this.url + this.endpointV7 + '?authToken=' + token + '&WSDESCD=' + descripcion);
  }

  getZrstdspsView08(token, detalle): Observable<any> {
    return this._http.get(this.url + this.endpointV8 + '?authToken=' + token + '&W4RPGI=' + detalle);
  }

}
