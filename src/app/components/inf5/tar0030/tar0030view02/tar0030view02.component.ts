import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { Tar0030Service } from '../../../../services/inf5/tar0030.service';
import { Tar0030m02Model } from '../../../../models/tar0030m02.models';

@Component({
  selector: 'app-tar0030view02',
  templateUrl: './tar0030view02.component.html',
  providers: [UserService, Tar0030Service]
})
export class Tar0030view02Component implements OnInit {
  title = 'INF 5 - Pantalla TAR 0030';
  public identity;
  public token;
  public tar0030m02: Tar0030m02Model;
  public status_tar0030m02: string;
  public mensaje: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _tar0030Service: Tar0030Service
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.tar0030m02 = new Tar0030m02Model('', '', '', '', '');
   }

  ngOnInit() {
  }
  onSubmit(form) {
    this._tar0030Service.getTar0030View02(this.token, this.tar0030m02.CUENTA).subscribe(
      response => {

        // if (response.status == 'success') {
        this.tar0030m02 = response;
        // } else {
        //   this.status_tar0030 = 'error';
        // }
      },
      error => {
        console.log(<any>error);
        this.status_tar0030m02 = 'error';
      }

    );
  }

}
