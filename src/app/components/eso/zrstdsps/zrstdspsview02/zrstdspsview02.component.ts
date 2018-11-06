import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstdspsm02Model } from '../../../../models/zrstdspsm02.models';
import { ZrstdspsService } from '../../../../services/eso/zrstdsps.service';

import { Zrstdspsm03Model } from '../../../../models/zrstdspsm03.models';
import { Zrstdspsm07Model } from '../../../../models/zrstdspsm07.models';

@Component({
  selector: 'app-zrstdspsview02',
  templateUrl: './zrstdspsview02.component.html',
  providers: [UserService, ZrstdspsService]
})
export class Zrstdspsview02Component implements OnInit {
  title: 'ESO - Pantalla ZRSTDSPS';
  title2: String;
  public identity;
  public token;
  public zrstdspsm02: Zrstdspsm02Model = new Zrstdspsm02Model();
  public zrstdspsm03: Zrstdspsm03Model;
  public zrstdspsm07: Zrstdspsm07Model;

  public rowsOnPage = 5;

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
    private _zrstdspsService: ZrstdspsService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.zrstdspsm03 = new Zrstdspsm03Model('', '', '', '', '', '', '', '', '', '', '', '', '');
    this.zrstdspsm07 = new Zrstdspsm07Model('', '', '', '', '', '');
  }

  ngOnInit() {
    this.zrstdspsv02();
  }

  zrstdspsv02() {
    
    this._route.params.subscribe(params => {
      //console.log(params);
      this.dscent = params['dscent'];
      this.dsano = params['dsano'];
      this.dscic = params['dscic'];
      this.dsag = params['dsag'];
      this.dsorg = params['dsorg'];
      this.dslogo = params['dslogo'];
      this.dscuenta = params['dscuenta'];
      this.dstitular = params['dstitular'];
      this._zrstdspsService.getZrstdspsView02(this.token, this.dscent, this.dsano, this.dscic, this.dsag, this.dsorg, this.dslogo, this.dscuenta, this.dstitular).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstdspsm02 = response;
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

  zrstdspsv03( dsorg, dslogo, dscuenta, dscent, dsaño, dscic, dsag) {
    this.title2 = 'ESO - Pantalla-3';
    this._zrstdspsService.getZrstdspsView03(this.token, dsorg, dslogo, dscuenta, dscent, dsaño, dscic, dsag).subscribe(
      response => {
        if (response.error_message == null) {
          this.zrstdspsm03 = response;
        } else {
          this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
        }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning('ERROR.: Servidor No Found.', 'Error.', { timeOut: 3000 });
      }
    );
  }

  zrstdspsv07(pantalla, wdesc, wfmov, wamnt, wtefm, wtnoa, wiorg) {
    this.title2 = 'ESO - Pantalla-7';
    this._zrstdspsService.getZrstdspsView07(this.token, pantalla, '', '', '', '', '', '', wdesc, wfmov, wamnt, wtefm, wtnoa, wiorg).subscribe(
      response => {
        if (response.error_message == null) {
          this.zrstdspsm07 = response;
        } else {
          this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
        }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning('ERROR.: Servidor No Found.', 'Error.', { timeOut: 3000 });
      }
    );
  }

}
