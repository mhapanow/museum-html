import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Cacr216m01Model } from '../../../../models/cacr216m01.models';
import { Cacr216Service } from '../../../../services/inf36/cacr216.service';

// Declaramos las variables para jQuery
declare var jQuery: any;

@Component({
  selector: 'app-cacr216view01',
  templateUrl: './cacr216view01.component.html',
  providers: [UserService, Cacr216Service]
})

export class Cacr216view01Component implements OnInit {
  title = 'INF 36 - Pantalla CACC 200';
  public identity;
  public token;
  public cacr216: Cacr216m01Model[];


  constructor(
    private _userService: UserService,
    private _cacr216Service: Cacr216Service,
    private _toastr: ToastrService
  ) { this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    this.cargarBanches();
   }

  ngOnInit() {
  }

  cargarBanches() {
    this._cacr216Service.getCacr216View01(this.token).subscribe(
      response => {
        if (response.error_message == null) {
          this.cacr216 = response.data;
          setTimeout(() => {
            jQuery(function ($) {
              $('.table').footable({
                'rows': $.get(this.cacr216)
              });
            });
          }, 300);
        } else {
          this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
        }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning('Error: Servidor no Found', 'Error', { timeOut: 3000 });
      }
    );
  }

}
