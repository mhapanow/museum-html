import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstdspsm01Model } from '../../../../models/zrstdspsm01.models';
import { ZrstdspsService } from '../../../../services/eso/zrstdsps.service';

import { Zrstdspsm03Model } from '../../../../models/zrstdspsm03.models';
import { Zrstdspsm07Model } from '../../../../models/zrstdspsm07.models';

import { Location } from '@angular/common';

@Component({
  selector: 'app-zrstdspsview01',
  templateUrl: './zrstdspsview01.component.html',
  providers: [UserService, ZrstdspsService]
})
export class Zrstdspsview01Component implements OnInit {
  title: 'ESO - Pantalla ZRSTDSPS';
  title2: String;
  public identity;
  public token;
  public zrstdspsm01: Zrstdspsm01Model = new Zrstdspsm01Model();
  public zrstdspsm03: Zrstdspsm03Model;
  public zrstdspsm07: Zrstdspsm07Model;

  public rowsOnPage = 5;

  cargando: boolean = true;

  dsano4: String;
  dscent: String;
  dsano: String;
  dscic: String;
  dsag: String;
  dsorg: String;
  dslogo: String;
  dscuenta: String;
  dstitular: String;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstdspsService: ZrstdspsService,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.zrstdspsm03 = new Zrstdspsm03Model('', '', '', '', '', '', '', '', '', '', '', '', '');
    this.zrstdspsm07 = new Zrstdspsm07Model('', '', '', '', '' , '');
   }

  ngOnInit() {
    this.zrstdspsv01();
  }

  backClicked() {
    this._location.back();
  }

  zrstdspsv01() {
    this._route.params.subscribe(params => {
      this.dsano4 = params['dsano4'];
      this.dscent = params['dsano4'].substring(0, 2);
      this.dsano = params['dsano4'].substring(2, 4);
      this.dscic = params['dscic'];
      this.dsag = params['dsag'];
      this.dsorg = params['dsorg'];
      this.dslogo = params['dslogo'];
      this.dscuenta = params['dscuenta'];
      this.dstitular = params['dstitular'];
      this._zrstdspsService.getZrstdspsView01(this.token, this.dsano4, this.dscent, this.dsano, this.dscic, this.dsag, this.dsorg,
        this.dslogo, this.dscuenta, this.dstitular).subscribe(
        response => {
          this.zrstdspsm01 = null;
          if (response.error_message == null) {
            this.zrstdspsm01 = response;
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

  zrstdspsv03(dsorg: String, dslogo: String, dscuenta: String, dscent: String, dsaño: String, dscic: String, dsag: String) {
    this.title2 = 'ESO - Pantalla-3';
    this.cargando = true;
    let promesa = new Promise ( (resolve, reject) => {
        this._zrstdspsService.getZrstdspsView03(this.token, dsorg, dslogo, dscuenta, dscent, dsaño, dscic, dsag).subscribe(
          response => {
            if (response.error_message == null) {
              this.cargando = false;
              this.zrstdspsm03 = response;
              resolve();
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

  zrstdspsv07(pantalla, wdesc, wfmov, wamnt, wtefm, wtnoa, wiorg) {
    this.title2 = 'ESO - Pantalla-7';
    this.cargando = true;
    let promesa = new Promise ( (resolve, reject) => {
        this._zrstdspsService.getZrstdspsView07(this.token, pantalla, wdesc, wfmov, wamnt, wtefm, wtnoa, wiorg, '', '', '', '', '', '').subscribe(
          response => {
            if (response.error_message == null) {
              this.cargando = false;
              this.zrstdspsm07 = response;
              resolve();
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
