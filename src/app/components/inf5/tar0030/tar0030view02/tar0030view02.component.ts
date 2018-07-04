import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Tar0030Service } from '../../../../services/inf5/tar0030.service';
import { Tar0030m02Model } from '../../../../models/tar0030m02.models';

@Component({
  selector: 'app-tar0030view02',
  templateUrl: './tar0030view02.component.html',
  providers: [UserService, Tar0030Service]
})
export class Tar0030view02Component implements OnInit {
  title = 'INF 5 - Pantalla TAR 0030';
  public identity;
  public token;
  public tar0030m02: Tar0030m02Model;
  public ncuenta: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _tar0030Service: Tar0030Service,
    private _toastr: ToastrService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.tar0030m02 = new Tar0030m02Model('', '', '', '', '');
   }

  ngOnInit() {
    this.verCuenta();
  }

  verCuenta() {
    this._route.params.subscribe(params => {
      this.ncuenta = params['ncuenta'];
      this.visualizar();
    });
  }

  visualizar() {
    this._tar0030Service.getTar0030View02(this.token, this.ncuenta).subscribe(
      response => {

        if (response.error_message == null) {
          this.tar0030m02 = response;
        } else {
          this._toastr.warning(response.error_message, 'Validación', { timeOut: 3000 });
        }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning('ERROR.: Servidor No Found.', 'Error.', { timeOut: 3000 });
      }
    );
  }

}
