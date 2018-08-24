import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Ccrr0500Service } from '../../../../services/cre/ccrr0500.service';
import { Ccrr0500m02Model } from '../../../../models/ccrr0500m02.models';

// Declaramos las variables para jQuery
declare var jQuery: any;

@Component({
  selector: 'app-ccrr0500view02',
  templateUrl: './ccrr0500view02.component.html',
  providers: [UserService, Ccrr0500Service]
})
export class Ccrr0500view02Component implements OnInit {
  title = 'CRE - Pantalla CCRR 0500';
  public identity;
  public token;
  public ccrr0500m02: Ccrr0500m02Model;


  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _ccrr0500Service: Ccrr0500Service
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.ccrr0500m02 = new Ccrr0500m02Model('', '', '', '', '', '', '', '', '', '', '');
    this.ccrr0500v2();
   }

  ngOnInit() {
  }

  ccrr0500v2() {
    let nsucursal: String;
    let ndivision: String;
    let nestado: String;
    this._route.params.subscribe(params => {
      nsucursal = params['nsucursal'];
      ndivision = params['ndivision'];
      nestado = params['nestado'];
      this._ccrr0500Service.getCcrr0500View02(this.token, nsucursal, ndivision, nestado).subscribe(
        response => {
          if (response.error_message == null) {
            this.ccrr0500m02 = response;
            setTimeout(() => {
              jQuery(function ($) {
                $('.table').footable({
                  'rows': $.get(this.ccrr0500m02)
                });
              });
            }, 300);
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
