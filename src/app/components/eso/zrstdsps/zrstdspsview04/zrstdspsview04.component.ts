import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstdspsm04Model } from '../../../../models/zrstdspsm04.models';
import { ZrstdspsService } from '../../../../services/eso/zrstdsps.service';

import { Zrstdspsm08Model } from '../../../../models/zrstdspsm08.models';


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

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstdspsService: ZrstdspsService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.zrstdspsm04 = new Zrstdspsm04Model('', '', '', '', '', '', '', '', '', '', '');
    this.zrstdspsm08 = new Zrstdspsm08Model('', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.zrstdspsv04();
  }

  zrstdspsv04() {
    let numcuenta: String;
    this._route.params.subscribe(params => {
      numcuenta = params['ncuenta'];
      this._zrstdspsService.getZrstdspsView04(this.token, numcuenta).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstdspsm04 = response.data;
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

  zrstdspsv08(numcuenta) {
    this.title2 = 'ESO - Pantalla-2';
      this._zrstdspsService.getZrstdspsView04(this.token, numcuenta).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstdspsm08 = response.data;
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
