import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Cacr205Service } from '../../../../services/inf36/cacr205.service';
import { Cacr205m02Model } from '../../../../models/cacr205m02.models';

@Component({
  selector: 'app-cacr205view02',
  templateUrl: './cacr205view02.component.html',
  providers: [UserService, Cacr205Service]
})
export class Cacr205view02Component implements OnInit {
  title = 'INF 36 - Pantalla CACR 205';
  public identity;
  public token;
  public cacr205m02: Cacr205m02Model;
  public cuenta: String = '';

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _cacr205Service: Cacr205Service,
    private _toastr: ToastrService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.cacr205m02 = new Cacr205m02Model('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
   }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this._route.params.subscribe(params => {
      const clave = params['clave'];
      this.cuenta = params['ncuenta'];

      this._cacr205Service.getCacr205View02(this.token, this.cuenta, clave).subscribe(
          response => {
            if (response.error_message == null) {
              this.cacr205m02 = response;
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
