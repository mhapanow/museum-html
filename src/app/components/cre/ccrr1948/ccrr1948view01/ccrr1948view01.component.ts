import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Ccrr1948Service } from '../../../../services/cre/ccrr1948.service';
import { Ccrr1948m01Model } from '../../../../models/ccrr1948m01.models';

@Component({
  selector: 'app-ccrr1948view01',
  templateUrl: './ccrr1948view01.component.html',
  providers: [UserService, Ccrr1948Service]
})
export class Ccrr1948view01Component implements OnInit {
  title: 'CRE - Pantalla CCRR 1948';
  public identity;
  public token;
  public ccrr1948m01: Ccrr1948m01Model[];

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _ccrr1948Service: Ccrr1948Service
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.ccrr1948v2();
  }

  ngOnInit() {
  }

  ccrr1948v2() {
    let ncredito: String;
    this._route.params.subscribe(params => {
      ncredito = params['ncredito'];
      this._ccrr1948Service.getCcrr1948View01(this.token, ncredito).subscribe(
        response => {
          if (response.error_message == null) {
            this.ccrr1948m01 = response.data;
          } else {
            this._toastr.warning(response.error_message, 'Validación', { timeOut: 3000 });
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
