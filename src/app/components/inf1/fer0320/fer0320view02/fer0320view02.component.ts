import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { Fer0320Service } from '../../../../services/inf1/fer0320.service';
import { Fer0320m02Model } from '../../../../models/fer0320m02.models';

import { Location } from '@angular/common';

@Component({
  selector: 'app-fer0320view02',
  templateUrl: './fer0320view02.component.html',
  providers: [UserService, Fer0320Service]
})
export class Fer0320view02Component implements OnInit {
  title = 'INF 1 - Pantalla FER 0320';
  public identity;
  public token;
  public fer0320m02: Fer0320m02Model;

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _Fer0320Service: Fer0320Service,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.fer0320m02 = new Fer0320m02Model('', '', '', '', '', '', '', '', ''
                                          , '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.getFer0320v02();
  }

  backClicked() {
    this._location.back();
  }

  getFer0320v02() {
    this._route.params.subscribe(params => {
      this._Fer0320Service.getFer0320View02(this.token, params['ncuenta']).subscribe(
        response => {
          if (response.error_message == null) {
            this.fer0320m02 = response;
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
