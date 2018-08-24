import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Cacr210Service } from '../../../../services/inf36/cacr210.service';
import { Cacr210m02Model } from '../../../../models/cacr210m02.models';

@Component({
  selector: 'app-cacr210view02',
  templateUrl: './cacr210view02.component.html',
  providers: [UserService, Cacr210Service]
})
export class Cacr210view02Component implements OnInit {
  title = 'INF 36 - Pantalla CACR 210';
  public identity;
  public token;
  public cacr210m02: Cacr210m02Model;
  public cuenta: String = '';

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _cacr210Service: Cacr210Service,
    private _toastr: ToastrService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.cacr210m02 = new Cacr210m02Model('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.cargarDatos();
  }

  lPads(valor: String) {
    if (valor.length === 0 || valor.length >= 10) {
      return valor;
    } else {
      return new Array(1 + 10 - valor.length).join('0') + valor;
    }
  }

  cargarDatos() {
    this._route.params.subscribe(params => {
      const clave = params['clave'];
      this.cuenta = this.lPads( params['ncuenta'] );

      this._cacr210Service.getCacr210View02(this.token, this.cuenta, clave).subscribe(
          response => {
            if (response.error_message == null) {
              this.cacr210m02 = response;
            } else {
              this._toastr.error(response.error_message, 'Se ha producido un error', { timeOut: 3000 });
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
