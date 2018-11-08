import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstreclm01Model } from '../../../../models/zrstreclm01.models';
import { ZrstreclService } from '../../../../services/eso/zrstrecl.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-zrstreclview01',
  templateUrl: './zrstreclview01.component.html',
  providers: [UserService, ZrstreclService]
})
export class Zrstreclview01Component implements OnInit {
  title: 'ESO - Pantalla ZRSTRECL';
  public identity;
  public token;
  public zrstreclm01: Zrstreclm01Model;

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstreclService: ZrstreclService,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.zrstreclm01 = new Zrstreclm01Model('', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.zrstreclv01();
  }

  backClicked() {
    this._location.back();
  }

  zrstreclv01() {
    let meorg: String;
    let melogo: String;
    let mencct: String;
    let meyfac: String;
    let meaafc: String;
    let mecifa: String;
    let meagig: String;
    let cuerpo: String;
    this._route.params.subscribe(params => {
      meorg = params['meorg'];
      melogo = params['melogo'];
      mencct = params['mencct'];
      meyfac = params['meyfac'];
      meaafc = params['meaafc'];
      mecifa = params['mecifa'];
      meagig = params['meagig'];
      cuerpo = params['cuerpo'];
      this._zrstreclService.getZrstreclView01(this.token, meorg, melogo, mencct, meyfac, meaafc, mecifa, meagig, cuerpo).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstreclm01 = response;
          } else {
            this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
          }
        },
        error => {
          console.log(<any>error);
          this._toastr.warning('ERROR.: Servidor No Found.', 'Error.', { timeOut: 3000 });
        }
      );
    });
  }

}
