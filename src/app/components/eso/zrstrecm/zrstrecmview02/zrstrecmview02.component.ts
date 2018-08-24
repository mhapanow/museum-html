import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstrecmm02Model } from '../../../../models/zrstrecmm02.models';
import { ZrstrecmService } from '../../../../services/eso/zrstrecm.service';

@Component({
  selector: 'app-zrstrecmview02',
  templateUrl: './zrstrecmview02.component.html',
  providers: [UserService, ZrstrecmService]
})
export class Zrstrecmview02Component implements OnInit {
  title: 'ESO - Pantalla ZRSTRECM';
  public identity;
  public token;
  public zrstrecmm02: Zrstrecmm02Model[];

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstrecmService: ZrstrecmService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.zrstrecmv02();
  }

  zrstrecmv02() {
    let numcuenta: String;
    this._route.params.subscribe(params => {
      numcuenta = params['ncuenta'];
      this._zrstrecmService.getZrstrecmView02(this.token, numcuenta).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstrecmm02 = response.data;
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
