import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Ccrr0580Service } from '../../../../services/cre/ccrr0580.service';
import { Ccrr0580m01Model } from '../../../../models/ccrr0580m01.models';

// Declaramos las variables para jQuery
declare var jQuery: any;

@Component({
  selector: 'app-ccrr0580view01',
  templateUrl: './ccrr0580view01.component.html',
  providers: [UserService, Ccrr0580Service]
})
export class Ccrr0580view01Component implements OnInit {
  title: 'CRE - Pantalla CCRR 0580';
  public identity;
  public token;
  public ccrr0580m01: Ccrr0580m01Model;


  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _ccrr0580Service: Ccrr0580Service
  ) {
    this.ccrr0580m01 = new Ccrr0580m01Model('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                                            '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.ccrr0580v01();
  }

  ngOnInit() {
  }

  ccrr0580v01() {
    let numcredito: String;
    this._route.params.subscribe(params => {
      numcredito = params['ncredito'];
      this._ccrr0580Service.getCcrr0580View01(this.token, numcredito).subscribe(
          response => {
            // console.log(response);
            if (response.error_message == null) {
              this.ccrr0580m01 = response;
              setTimeout(() => {
                jQuery(function ($) {
                  $('.table').footable({
                    'rows': $.get(this.ccrr0580m01)
                  });
                });
              }, 300);
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
