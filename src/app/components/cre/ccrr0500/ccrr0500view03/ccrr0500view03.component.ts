import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Ccrr0500Service } from '../../../../services/cre/ccrr0500.service';
import { Ccrr0500m03Model } from '../../../../models/ccrr0500m03.models';

@Component({
  selector: 'app-ccrr0500view03',
  templateUrl: './ccrr0500view03.component.html',
  providers: [UserService, Ccrr0500Service]
})
export class Ccrr0500view03Component implements OnInit {
  title = 'CRE - Pantalla CCRR 0500';
  public identity;
  public token;
  public ccrr0500m03: Ccrr0500m03Model[];
  // public ccrr0500m03: Ccrr0500m03Model = new Ccrr0500m03Model();
  CRNTAR: String;
  public rowsOnPage = 5;
  public sortBy = 'NOMCLI';
  public sortOrder = 'asc';

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _ccrr0500Service: Ccrr0500Service
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.ccrr0500v3();
  }

  ngOnInit() {
  }

  ccrr0500v3() {
    let nreferencia: String;
    this._route.params.subscribe(params => {
      nreferencia = params['nreferencia'];
      this._ccrr0500Service.getCcrr0500View03(this.token, nreferencia).subscribe(
        response => {
          if (response.error_message == null) {
            this.ccrr0500m03 = response.data;
            this.CRNTAR = response.CRNTAR;
          } else {
            this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
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
