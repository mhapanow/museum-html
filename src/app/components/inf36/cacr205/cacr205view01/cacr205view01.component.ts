import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../../services/user.service';
import { Cacr205Service } from '../../../../services/inf36/cacr205.service';
import { Cacr205m01Model } from '../../../../models/cacr205m01.models';

@Component({
  selector: 'app-cacr205view01',
  templateUrl: './cacr205view01.component.html',
  providers: [UserService, Cacr205Service]
})
export class Cacr205view01Component implements OnInit {
  title = 'INF 36 - Pantalla CACR 205';
  public identity;
  public token;
  public cacr205m01: Cacr205m01Model[];
  public ncuenta: String = '';
  public rowsOnPage = 5;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _cacr205Service: Cacr205Service,
    private _toastr: ToastrService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.ncuenta = form.value.ncuenta;
    this._cacr205Service.getCacr205View01(this.token, this.ncuenta).subscribe(
      response => {
        if (response.error_message == null) {
          this.cacr205m01 = response.data;
        } else {
          this._toastr.warning(response.error_message, 'Validación', { timeOut: 3000 });
        }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning(<any>error, 'Error', { timeOut: 3000 });
      }
    );
  }

}
