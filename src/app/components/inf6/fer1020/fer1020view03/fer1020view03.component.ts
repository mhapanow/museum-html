import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
import { Fer1020Service } from '../../../../services/inf6/fer1020.service';
import { Fer1020m03Model } from '../../../../models/fer1020m03.models';

@Component({
  selector: 'app-fer1020view03',
  templateUrl: './fer1020view03.component.html',
  providers: [UserService, Fer1020Service]
})
export class Fer1020view03Component implements OnInit {
  title = 'INF 6 - Pantalla FER 1020';
  public identity;
  public token;
  public fer1020m03: Fer1020m03Model[];
  public nbase: number;
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
    // this.fer1020m03 = new Fer1020m03Model('', '', '', '', '', '', '', '', '');
    this.fer1020v3();
   }

  ngOnInit() {
  }

  fer1020v3() {
    this._route.params.subscribe(params => {
      this.nbase = +params['nbase'];
      if (this.nbase > 0) {
        this._fer1020Service.getFer1020View03(this.token, this.nbase).subscribe(
          response => {
            if (response.error_message == null) {
              this.fer1020m03 = response.data;
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
