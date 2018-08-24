import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstreclm01Model } from '../../../../models/zrstreclm01.models';
import { ZrstreclService } from '../../../../services/eso/zrstrecl.service';

@Component({
  selector: 'app-zrstreclview01',
  templateUrl: './zrstreclview01.component.html',
  providers: [UserService, ZrstreclService]
})
export class Zrstreclview01Component implements OnInit {
  title: 'ESO - Pantalla ZRSTRECL';
  public identity;
  public token;
  public zrstreclm01: Zrstreclm01Model[];

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstreclService: ZrstreclService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.zrstreclv01();
  }

  zrstreclv01() {
    let numcuenta: String;
    this._route.params.subscribe(params => {
      numcuenta = params['ncuenta'];
      this._zrstreclService.getZrstreclView01(this.token, numcuenta).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstreclm01 = response.data;
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
