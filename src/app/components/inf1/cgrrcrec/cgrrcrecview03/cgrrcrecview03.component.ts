import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { CgrrcrecService } from '../../../../services/inf1/cgrrcrec.service';
import { Cgrrcrecm03Model } from '../../../../models/cgrrcrecm03.models';

import { Location } from '@angular/common';

@Component({
  selector: 'app-cgrrcrecview03',
  templateUrl: './cgrrcrecview03.component.html',
  providers: [UserService, CgrrcrecService]
})
export class Cgrrcrecview03Component implements OnInit {
  title = 'INF 1 - Pantalla Cgrrcrec';
  public identity;
  public token;
  ncuenta: any;
  bandera = true;
  dmacct: number = 0;
  public cgrrcrecm03: Cgrrcrecm03Model;

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _cgrrcrecService: CgrrcrecService,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.cgrrcrecm03 = new Cgrrcrecm03Model('', '', '', '', '', '', '', '', '','');
  }

  ngOnInit() {
    this.getCgrrcrecv3();
  }

  backClicked() {
    this._location.back();
  }

   getCgrrcrecv3() {
    this._route.params.subscribe(params => {
      this._cgrrcrecService.getCgrrcrecView03(this.token, params['ncuenta']).subscribe(
        response => {
          if (response.error_message == null) {
            this.cgrrcrecm03 = response;
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
