import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable()
export class ZrstreclService {
  public url: string;
  public endpointV1: String;
  public endpointV2: String;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.endpointV1 = GLOBAL.Zrstreclview01;
    this.endpointV2 = GLOBAL.Zrstreclview02;
   }

  getZrstreclView01(token, meorg, melogo, mencct, meyfac, meaafc, mecifa, meagig, cuerpo): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token
      //+ '&meorg=354&melogo=601&mencct=0000036463271280008&meyfac=20&meaafc=04&mecifa=09&meagig=15&cuerpo=');
      + '&meorg=' + meorg + '&melogo=' + melogo + '&mencct=' + mencct + '&meyfac=' + meyfac + '&meaafc='
      + meaafc + '&mecifa=' + mecifa + '&meagig=' + meagig + '&cuerpo=' + cuerpo);
  }

  getZrstreclView02(token, meorg, melogo, mencct, meyfac, meaafc, mecifa, meagig, cuerpo): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token
      //+ '&meorg=354&melogo=601&mencct=0000036463271280008&meyfac=20&meaafc=04&mecifa=09&meagig=15&cuerpo=');
      + '&meorg=' + meorg + '&melogo=' + melogo + '&mencct=' + mencct + '&meyfac=' + meyfac + '&meaafc='
      + meaafc + '&mecifa=' + mecifa + '&meagig=' + meagig + '&cuerpo=' + cuerpo);
  }

}
