import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { Tar0030Service } from '../../../../services/inf5/tar0030.service';
import { Tar0030m01Model } from '../../../../models/tar0030m01.models';

@Component({
  selector: 'app-tar0030view01',
  templateUrl: './tar0030view01.component.html',
  providers: [UserService, Tar0030Service]
})
export class Tar0030view01Component implements OnInit {
  title = 'INF 5 - Pantalla TAR 0030';
  ncuenta = '636080-012';
  public identity;
  public token;
  public tar0030: Tar0030m01Model;
  public status_tar0030: string;
  public mensaje: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _tar0030Service: Tar0030Service
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.tar0030 = new Tar0030m01Model('', '', '', '', '', '', '', '', '', '', '', '', '',
                                       '', '', '', '', '', '', '', '', '', '', '', '', '',
                                       '', '', '', '', '', '', '', '', '', '', '', '', '',
                                       '', '', '', '', '', '', '', '', '', '', '');
   }

  ngOnInit() {
    this.status_tar0030 = '';
  }

  onSubmit(form) {
    this._tar0030Service.getTar0030View01(this.token, this.tar0030.CUENTA).subscribe(
      response => {
        // if (response.status == 'success') {
        console.log(response.error_message);
        if (response.error_message !== '') {
          this.status_tar0030 = response.error_message;
        } else {
          this.tar0030 = response;
        }
        // } else {
        //   this.status_tar0030 = 'error';
        // }
      },
      error => {
        console.log(<any>error);
        this.status_tar0030 = 'error';
      }

    );
  }

}
