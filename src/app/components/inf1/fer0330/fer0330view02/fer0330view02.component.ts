import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { Fer0330Service } from '../../../../services/inf1/fer0330.service';
import { Fer0330m02Model } from '../../../../models/fer0330m02.models';

import { Location } from '@angular/common';

@Component({
  selector: 'app-fer0330view02',
  templateUrl: './fer0330view02.component.html',
  providers: [UserService, Fer0330Service]
})
export class Fer0330view02Component implements OnInit {
  title = 'INF 1 - Pantalla FER 0330';
  public identity;
  public token;
  public fer0330m02: Fer0330m02Model;

  public rowsOnPage = 5;

  constructor(private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _Fer0330Service: Fer0330Service,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.fer0330m02 = new Fer0330m02Model('', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.getFer0330v02();
  }

  backClicked() {
    this._location.back();
  }

  getFer0330v02() {
    this._route.params.subscribe(params => {
      this._Fer0330Service.getFer0330View02(this.token, params['ncuenta']).subscribe(
        response => {
          if (response.error_message == null) {
            this.fer0330m02 = response;
          } else {
            this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
          }
        },
        error => {
          console.log(<any>error);
          this._toastr.warning(<any>error, 'Error', { timeOut: 3000 });
        }

      );
    });
  }

}
