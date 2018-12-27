import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { Fer0330Service } from '../../../../services/inf1/fer0330.service';
import { Fer0330m01Model } from '../../../../models/fer0330m01.models';

import { Location } from '@angular/common';

@Component({
  selector: 'app-fer0330view01',
  templateUrl: './fer0330view01.component.html',
  providers: [UserService, Fer0330Service]
})
export class Fer0330view01Component implements OnInit {
  title = 'INF 1 - Pantalla FER 0330';
  public identity;
  public token;
  public fer0330m01: Fer0330m01Model;

  constructor(private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _Fer0330Service: Fer0330Service,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.fer0330m01 = new Fer0330m01Model('', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
