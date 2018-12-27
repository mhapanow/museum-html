import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { Fer0320Service } from '../../../../services/inf1/fer0320.service';
import { Fer0320m01Model } from '../../../../models/fer0320m01.models';

import { Location } from '@angular/common';

@Component({
  selector: 'app-fer0320view01',
  templateUrl: './fer0320view01.component.html',
  providers: [UserService, Fer0320Service]
})
export class Fer0320view01Component implements OnInit {
  title = 'INF 1 - Pantalla FER 0320';
  public identity;
  public token;
  public fer0320m01: Fer0320m01Model;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _Fer0320Service: Fer0320Service,
    private _location: Location
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.fer0320m01 = new Fer0320m01Model('', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
