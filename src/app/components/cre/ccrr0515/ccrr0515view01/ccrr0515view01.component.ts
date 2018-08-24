import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Ccrr0515Service } from '../../../../services/cre/ccrr0515.service';
import { Ccrr0515m01Model } from '../../../../models/ccrr0515m01.models';

@Component({
  selector: 'app-ccrr0515view01',
  templateUrl: './ccrr0515view01.component.html',
  providers: [UserService, Ccrr0515Service]
})
export class Ccrr0515view01Component implements OnInit {
  title: 'CRE - Pantalla CCRR 0515';
  public identity;
  public token;
  public ccrr0515m01: Ccrr0515m01Model[];

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _ccrr0515Service: Ccrr0515Service
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.ccrr0515v2();
  }

  ngOnInit() {
  }

  ccrr0515v2() {
    let ncredito: String;
    this._route.params.subscribe(params => {
      ncredito = params['ncredito'];
      this._ccrr0515Service.getCcrr0515View01(this.token, ncredito).subscribe(
        response => {
          if (response.error_message == null) {
            this.ccrr0515m01 = response.data;
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
