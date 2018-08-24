import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../../services/user.service';
import { Tar0030Service } from '../../../../services/inf5/tar0030.service';
import { Tar0030m01Model } from '../../../../models/tar0030m01.models';

@Component({
  selector: 'app-tar0030view01',
  templateUrl: './tar0030view01.component.html',
  providers: [UserService, Tar0030Service]
})
export class Tar0030view01Component implements OnInit {
  title = 'INF 5 - Pantalla TAR 0030';
  public identity;
  public token;
  public tar0030: Tar0030m01Model;
  ncuenta: any;
  bandera = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _tar0030Service: Tar0030Service,
    private _toastr: ToastrService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.tar0030 = new Tar0030m01Model('', '', '', '', '', '', '', '', '', '', '', '', '',
                                       '', '', '', '', '', '', '', '', '', '', '', '', '',
                                       '', '', '', '', '', '', '', '', '', '', '', '', '',
                                       '', '', '', '', '', '', '', '', '', '', '');

     }

  ngOnInit() {
  }

  lPads(valor: String) {
    if ((valor + '').length === 0 || (valor + '').length >= 10) {
      return valor;
    } else {
      return new Array(1 + 10 - (valor + '').length).join('0') + valor;
    }
  }

  onSubmit(form: NgForm) {
    this.ncuenta = this.lPads(form.value.ncuenta);
    this._tar0030Service.getTar0030View01(this.token, this.ncuenta).subscribe(
      response => {
        if (response.error_message == null) {
          this.tar0030 = response;
          this.bandera = (this.tar0030 == null);
        } else {
          this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
        }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning(<any>error, 'Error', { timeOut: 3000 });
      }

    );
  }

  verView2(ncuenta: String ) {
    this._router.navigate(['/tar0030t', ncuenta]);
  }

}
