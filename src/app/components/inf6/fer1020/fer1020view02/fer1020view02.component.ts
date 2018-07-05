import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Fer1020Service } from '../../../../services/inf6/fer1020.service';
import { Fer1020m02Model } from '../../../../models/fer1020m02.models';

@Component({
  selector: 'app-fer1020view02',
  templateUrl: './fer1020view02.component.html',
  providers: [UserService, Fer1020Service]
})
export class Fer1020view02Component implements OnInit {
  title = 'INF 6 - Pantalla FER 1020';
  public identity;
  public token;
  public fer1020: Fer1020m02Model;
  public ncuenta: number;
  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService,
    private _fer1020Service: Fer1020Service
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.fer1020 = new Fer1020m02Model('', '', '', '', '', '', '', '', '', '', '', '');
    this.fer1020v2();
  }

  ngOnInit() {
  }

  fer1020v2() {
    this._route.params.subscribe(params => {
      this.ncuenta = +params['ncuenta'];
      if (this.ncuenta > 0) {
        this._fer1020Service.getFer1020View02(this.token, this.ncuenta).subscribe(
          response => {
            if (response.error_message == null) {
              this.fer1020 = response;
            } else {
              this._toastr.warning(response.error_message, 'Validación', { timeOut: 3000 });
            }
          },
          error => {
            console.log(<any>error);
            this._toastr.warning('ERROR.: Servidor No Found.', 'Error.', { timeOut: 3000 });
          }
        );

      }
    });
  }

}
