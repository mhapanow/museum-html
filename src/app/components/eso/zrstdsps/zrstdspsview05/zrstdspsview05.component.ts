import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstdspsm05Model } from '../../../../models/zrstdspsm05.models';
import { ZrstdspsService } from '../../../../services/eso/zrstdsps.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-zrstdspsview05',
  templateUrl: './zrstdspsview05.component.html',
  providers: [UserService, ZrstdspsService]
})
export class Zrstdspsview05Component implements OnInit {
  title: 'ESO - Pantalla ZRSTDSPS';
  public identity;
  public token;
  public zrstdspsm05: Zrstdspsm05Model;

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstdspsService: ZrstdspsService,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.zrstdspsm05 = new Zrstdspsm05Model('', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.zrstdspsv05();
  }

  backClicked() {
    this._location.back();
  }

  zrstdspsv05() {
    let meorg: String;
    let melogo: String;
    let mencct: String;
    let meyac: String;
    let meaafc: String;
    let mecifa: String;
    let meagig: String;
    this._route.params.subscribe(params => {
      meorg = params['meorg'];
      melogo = params['melogo'];
      mencct = params['mencct'];
      meyac = params['meyac'];
      meaafc = params['meaafc'];
      mecifa = params['mecifa'];
      meagig = params['meagig'];
      this._zrstdspsService.getZrstdspsView05(this.token, meorg, melogo, mencct, meyac, meaafc, mecifa, meagig).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstdspsm05 = response;
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
