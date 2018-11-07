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

  getZrstrecmView01(token, meorg, melogo, mencct, meyfac, meaafc, mecifa, meagig, meapen): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token
      //+ '&meorg=354&melogo=602&mencct=0000036463489710002&meyfac=20&meaafc=08&mecifa=04&meagig=01');
      + '&meorg=' + meorg + '&melogo=' + melogo + '&mencct=' + mencct
      + '&meyfac=' + meyfac + '&meaafc=' + meaafc + '&mecifa=' + mecifa + '&meagig=' + meagig
      + '&meapen=' + meapen);
  }

  getZrstrecmView02(token, meorg, melogo, mencct, meyfac, meaafc, mecifa, meagig, meapen): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token
    //+ '&meorg=354&melogo=601&mencct=0000036463271280008&meyfac=20&meaafc=09&mecifa=01&meagig=17');
    + '&meorg=' + meorg + '&melogo=' + melogo + '&mencct=' + mencct + '&meyfac='
    + meyfac + '&meaafc=' + meaafc + '&mecifa=' + mecifa + '&meagig=' + meagig + '&meapen=' + meapen);
  }

}
