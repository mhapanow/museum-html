import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class Cacr215Service {
  public url: string;
  public endpointV1: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.cacr215view1;
  }

  getCacr215View01(token): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token);
  }

}
