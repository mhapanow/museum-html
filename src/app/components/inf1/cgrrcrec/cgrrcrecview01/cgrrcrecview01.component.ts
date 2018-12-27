import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { CgrrcrecService } from '../../../../services/inf1/cgrrcrec.service';
import { Cgrrcrecm01Model } from '../../../../models/cgrrcrecm01.models';

import { Location } from '@angular/common';


@Component({
  selector: 'app-cgrrcrecview01',
  templateUrl: './cgrrcrecview01.component.html',
  providers: [UserService, CgrrcrecService]
})
export class Cgrrcrecview01Component implements OnInit {
  title = 'INF 1 - Pantalla Cgrrcrec';
  public identity;
  public token;
  ncuenta: any;
  bandera = true;
  dmacct: number = 0;
  public cgrrcrecm01: Cgrrcrecm01Model;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _cgrrcrecService: CgrrcrecService,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.cgrrcrecm01 = new Cgrrcrecm01Model('', '', '', '', '', '', '', '');
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }




}
