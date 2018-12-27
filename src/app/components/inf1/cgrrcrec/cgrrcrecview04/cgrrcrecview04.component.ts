import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { CgrrcrecService } from '../../../../services/inf1/cgrrcrec.service';
import { Cgrrcrecm04Model } from '../../../../models/cgrrcrecm04.models';

import { Location } from '@angular/common';

@Component({
  selector: 'app-cgrrcrecview04',
  templateUrl: './cgrrcrecview04.component.html',
  providers: [UserService, CgrrcrecService]
})
export class Cgrrcrecview04Component implements OnInit {
  title = 'INF 1 - Pantalla Cgrrcrec';
  public identity;
  public token;
  ncuenta: any;
  bandera = true;
  dmacct: number = 0;
  public cgrrcrecm04: Cgrrcrecm04Model;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _cgrrcrecService: CgrrcrecService,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.cgrrcrecm04 = new Cgrrcrecm04Model('', '', '', '', '', '', '', '', '', ''
                                          , '', '', '', '', '', '', '', '', '', ''
                                          , '', '', '', '', '', '', '', '', '', ''
                                          , '', '', '', '');
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }


}
