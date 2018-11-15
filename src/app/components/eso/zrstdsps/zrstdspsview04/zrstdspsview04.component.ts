import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstdspsm04Model } from '../../../../models/zrstdspsm04.models';
import { ZrstdspsService } from '../../../../services/eso/zrstdsps.service';

import { Zrstdspsm08Model } from '../../../../models/zrstdspsm08.models';

import { Location } from '@angular/common';


@Component({
  selector: 'app-zrstdspsview04',
  templateUrl: './zrstdspsview04.component.html',
  providers: [UserService, ZrstdspsService]
})
export class Zrstdspsview04Component implements OnInit {
  title: 'ESO - Pantalla ZRSTDSPS';
  title2: String = 'ESO - Pantalla';
  public identity;
  public token;
  public zrstdspsm04: Zrstdspsm04Model;
  public zrstdspsm08: Zrstdspsm08Model;

  public rowsOnPage = 5;

  cargando: boolean = true;

  meorg: String;
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
    this.zrstdspsm04 = new Zrstdspsm04Model('', '', '', '', '', '', '', '', '', '', '');
    this.zrstdspsm08 = new Zrstdspsm08Model('', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.zrstdspsv04();
  }

  backClicked() {
    this._location.back();
  }

  zrstdspsv04() {
    let meyfac: String;
    let meaafc: String;
    let mecifa: String;
    let meagig: String;
    let melogo: String;
    let mencct: String;

    this._route.params.subscribe(params => {
      meyfac = params['meyfac'];
      meaafc = params['meaafc'];
      mecifa = params['mecifa'];
      meagig = params['meagig'];
      melogo = params['melogo'];
      mencct = params['mencct'];
      this.meorg = params['meorg'];
      this.dstitular = params['dstitular'];

      this._zrstdspsService.getZrstdspsView04(this.token, meyfac, meaafc, mecifa, meagig, melogo, mencct).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstdspsm04 = response;
            //console.log(this.zrstdspsm04);
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

  zrstdspsv08(meyfac, meaafc, mecifa, meagig, melogo, mencct, w4rrred, w4orgn, w4rear, w4rpre ) {
    this.title2 = 'ESO - Pantalla-8';
    this.cargando = true;
    let promesa = new Promise ( (resolve, reject) => {
      this._zrstdspsService.getZrstdspsView08(this.token, meyfac, meaafc, mecifa, meagig, melogo,
         mencct, w4rrred, w4orgn, w4rear, w4rpre).subscribe(
        response => {
          if (response.error_message == null) {
            this.cargando = false;
            this.zrstdspsm08 = response;
           //console.log(response);
           //console.log(this.zrstdspsm08);
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
