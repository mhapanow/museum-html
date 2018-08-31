import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Tar0077m02Model } from '../../../../models/tar0077m02.models';
import { Tar0077Service } from '../../../../services/inf26/tar0077.service';

@Component({
  selector: 'app-tar0077view02',
  templateUrl: './tar0077view02.component.html',
  providers: [UserService, Tar0077Service],
  styles: []
})

export class Tar0077view02Component implements OnInit {
  title = 'INF 26 - Pantalla TAR 0077';
  public identity;
  public token;
  public tar0077list: Tar0077m02Model[];
  public rowsOnPage = 7;

  constructor(
    private _userService: UserService,
    private _tar0077Service: Tar0077Service,
    private _toastr: ToastrService
  ) { this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
    this.cargarDatos();
  }

  ngOnInit() {
  }

  cargarDatos() {
    this._tar0077Service.getTar0077View02(this.token).subscribe(
      response => {
        this.tar0077list = null;
        if (response.error_message == null) {
          this.tar0077list = response.data;
        } else {
          if (response.error_code === 404) {
            this._toastr.error('Tocken invalido o caducado', 'Se ha producido un error', { timeOut: 3000 });
          } else {
            this._toastr.error(response.error_message, 'Se ha producido un error', { timeOut: 3000 });
          }
        }
      },
      error => {
        console.log(<any>error);
        this._toastr.error('Error: Servidor no Found', 'Se ha producido un error', { timeOut: 3000 });
      }
    );
  }

}
