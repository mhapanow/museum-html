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

  getZrstdspsView01(token, dsano4, dscent, dsano, dscic, dsag, dsorg, dslogo, dscuenta, dstitular): Observable<any> {
    return this._http.get(this.url + this.endpointV1 + '?authToken=' + token + '&dsano4=' + dsano4 + '&dscent=' + dscent
    + '&dsano=' + dsano + '&dscic=' + dscic + '&dsag=' + dsag + '&dsorg=' + dsorg + '&dslogo=' + dslogo + '&dscuenta=' + dscuenta
    + '&dstitular=' + dstitular);
  }

  getZrstdspsView02(token, dscent, dsano, dscic, dsag, dsorg, dslogo, dscuenta, dstitular): Observable<any> {
    return this._http.get(this.url + this.endpointV2 + '?authToken=' + token + '&dscent=' + dscent
      + '&dsano=' + dsano + '&dscic=' + dscic + '&dsag=' + dsag + '&dsorg=' + dsorg + '&dslogo=' + dslogo + '&dscuenta=' + dscuenta
      + '&dstitular=' + dstitular);
  }

  getZrstdspsView03(token, dsorg: String, dslogo: String, dscuenta: String, dscent, dsaño, dscic, dsag): Observable<any> {
    return this._http.get(this.url + this.endpointV3 + '?authToken=' + token
     //+ '&dsorg=352&dslogo=302&dscuenta=0005123708220017239&dscent=20&dsaño=16&dscic=03&dsag=21');
     + '&dsorg=' + dsorg + '&dslogo=' + dslogo + '&dscuenta=' + dscuenta + '&dscent=' + dscent + '&dsaño=' + dsaño
     + '&dscic=' + dscic + '&dsag=' + dsag );
  }

  getZrstdspsView04(token, meyfac, meaafc, mecifa, meagig, melogo, mencct): Observable<any> {
    return this._http.get(this.url + this.endpointV4 + '?authToken=' + token
     //+ '&meyfac=20&meaafc=16&mecifa=03&meagig=21&melogo=302&mencct=0005123708220017239');
     + '&meyfac=' + meyfac + '&meaafc=' + meaafc + '&mecifa=' + mecifa
     + '&meagig=' + meagig + '&melogo=' + melogo + '&mencct=' + mencct);
  }

  getZrstdspsView05(token, meorg, melogo, mencct, meyac, meaafc, mecifa, meagig): Observable<any> {
    return this._http.get(this.url + this.endpointV5 + '?authToken=' + token
      //+ '&meorg=354&melogo=601&mencct=0000036466894670000&meyac=20&meaafc=16&mecifa=12&meagig=10');
      + '&meorg=' + meorg + '&melogo=' + melogo + '&mencct=' + mencct + '&meyac='
      + meyac + '&meaafc=' + meaafc + '&mecifa=' + mecifa + '&meagig=' + meagig);
  }

  getZrstdspsView06(token, meorg, melogo, mencct, meyac, meaafc, mecifa, meagig): Observable<any> {
    return this._http.get(this.url + this.endpointV6 + '?authToken=' + token
      //+ '&meorg=354&melogo=601&mencct=0000036466894670000&meyac=20&meaafc=16&mecifa=12&meagig=10');
      + '&meorg=' + meorg + '&melogo=' + melogo + '&mencct=' + mencct + '&meyac='
      + meyac + '&meaafc=' + meaafc + '&mecifa=' + mecifa + '&meagig=' + meagig);
  }

  getZrstdspsView07(token, pantalla, wdesc, wfmov): Observable<any> {
    return this._http.get(this.url + this.endpointV7 + '?authToken=' + token
      + '&custompantalla=1&w1desc=aplicationpruebasintest&w1fmov=0');
      // + '&custompantalla=' + pantalla + '&w1desc=' + wdesc + '&w1fmov=' + wfmov);
  }

  getZrstdspsView08(token, meyfac, meaafc, mecifa, meagig, melogo, mencct, w4rrred, w4orgn, w4rear, w4rpre): Observable<any> {
    return this._http.get(this.url + this.endpointV8 + '?authToken=' + token
      // + '&meyfac=0&meaafc=16&mecifa=11&meagig=14&melogo=601&mencct=0000036464930290008' +
      // '&w4rrred=COMAFI%20CASHBACK%2050%%201ER%20COMPRA%20CUOT%20T200&w4orgn=354&w4rear=0&w4rpre=0');
    + '&meyfac=' + meyfac + '&meaafc=' + meaafc + '&mecifa=' + mecifa + '&meagig=' + meagig + '&melogo=' + melogo + '&mencct=' + mencct +
    '&w4rrred=' + w4rrred + '&w4orgn=' + w4orgn + '&w4rear=' + w4rear + '&w4rpre=' + w4rpre);
  }

}
