import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Cacr210Service {
  public url: string;
  public endpoint01: String;
  public endpoint02: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    this.endpoint01 = GLOBAL.cacr210view1;
    this.endpoint02 = GLOBAL.cacr210view2;
  }

  getCacr210View01(token, fechaSeleccion, codigoSucursal, codigoEstado, codigoMotivoRechazo): Observable<any> {
    return this._http.get(this.url + this.endpoint01 + '?authToken=' + token
                                                    + '&ssfsel=' + fechaSeleccion
                                                    + '&ssbrch=' + codigoSucursal
                                                    + '&ssresu=' + codigoEstado
                                                    + '&ssmrec=' + codigoMotivoRechazo);
  }

  getCacr210View02(token, cuenta, clave): Observable<any> {
     return this._http.get(this.url + this.endpoint02 + '?authToken=' + token + '&wsacct=' + cuenta + '&clave=' + clave);
  }

}
