import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstdspsm06Model } from '../../../../models/zrstdspsm06.models';
import { ZrstdspsService } from '../../../../services/eso/zrstdsps.service';

@Component({
  selector: 'app-zrstdspsview06',
  templateUrl: './zrstdspsview06.component.html',
  providers: [UserService, ZrstdspsService]
})
export class Zrstdspsview06Component implements OnInit {
  title: 'ESO - Pantalla ZRSTDSPS';
  public identity;
  public token;
  public zrstdspsm06: Zrstdspsm06Model[];

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstdspsService: ZrstdspsService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.zrstdspsv06();
  }

  zrstdspsv06() {
    let numcuenta: String;
    this._route.params.subscribe(params => {
      numcuenta = params['ncuenta'];
      this._zrstdspsService.getZrstdspsView06(this.token, numcuenta).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstdspsm06 = response.data;
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
