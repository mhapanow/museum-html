import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Tar0077m03Model } from '../../../../models/tar0077m03.models';
import { Tar0077Service } from '../../../../services/inf26/tar0077.service';

@Component({
  selector: 'app-tar0077view03',
  templateUrl: './tar0077view03.component.html',
  providers: [UserService, Tar0077Service],
  styles: []
})
export class Tar0077view03Component implements OnInit {
  title = 'INF 26 - Pantalla TAR 0077';
  public identity;
  public token;
  public tar0077model: Tar0077m03Model;

  public codigo;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _tar0077Service: Tar0077Service,
    private _toastr: ToastrService
  ) {
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.tar0077model = new Tar0077m03Model('', '', '', '', null, '', '', '', '', '', '', '', '');
      this._route.params.subscribe( params => this.codigo = params.id );
   }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this._tar0077Service.getTar0077View03(this.token, this.codigo).subscribe(
      response => {
        if (response.error_message == null) {
          this.tar0077model = response;
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
