import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Ccrr0580Service } from '../../../../services/cre/ccrr0580.service';
import { Ccrr0580m02Model } from '../../../../models/ccrr0580m02.models';

@Component({
  selector: 'app-ccrr0580view02',
  templateUrl: './ccrr0580view02.component.html',
  providers: [UserService, Ccrr0580Service]
})
export class Ccrr0580view02Component implements OnInit {
  title: 'CRE - Pantalla CCRR 0580';
  public identity;
  public token;
  public ccrr0580m02: Ccrr0580m02Model;

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _ccrr0580Service: Ccrr0580Service
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.ccrr0580m02 = new Ccrr0580m02Model('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
                              , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
                            , '', '', '', '', '', '', '', '');
    this.ccrr0580v2();
  }

  ngOnInit() {
  }

  ccrr0580v2() {
    let ncredito: String;
    let ncuo: String;
    let arch: String;
    this._route.params.subscribe(params => {
      ncredito = params['ncredito'];
      ncuo = params['ncuo'];
      arch = params['arch'];
      this._ccrr0580Service.getCcrr0580View02(this.token, ncredito, ncuo, arch).subscribe(
        response => {

          if (response.error_message == null) {
            this.ccrr0580m02 = response;
          } else {
            console.log(response.error_message);
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
