import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { Fer0310Service } from '../../../../services/inf1/fer0310.service';
import { Fer0310m01Model } from '../../../../models/fer0310m01.models';

import { Location } from '@angular/common';

@Component({
  selector: 'app-fer0310view01',
  templateUrl: './fer0310view01.component.html',
  providers: [UserService, Fer0310Service]
})
export class Fer0310view01Component implements OnInit {
	title = 'INF 1 - Pantalla FER 0310';
  	public identity;
  	public token;
  	ncuenta: any;
  	bandera = true;
    dmacct: number = 0;
  	public fer0310m01: Fer0310m01Model;

  constructor( 
  	private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _Fer0310Service: Fer0310Service,
    private _location: Location
    ) {
	  	this.identity = this._userService.getIdentity();
   	 	this.token = this._userService.getToken();
	    this.fer0310m01 = new Fer0310m01Model('', '', '', '', '', '', '', '', '', '',
	    										'', '', '', '', '', '', '', '', '', '',
	    										'', '', '', '', '', '', '', '', '', '',
	    										'', '', '', '', '', '', '', '', '', '',
	    										'', '', '', '', '', '' );
     }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  lPads(valor: String) {
    if ((valor + '').length === 0 || (valor + '').length >= 10) {
      return valor;
    } else {
      return new Array(1 + 10 - (valor + '').length).join('0') + valor;
    }
  }

  onSubmit(form: NgForm) {
    this.ncuenta = this.lPads(form.value.ncuenta);
    this._Fer0310Service.getFer0310View01(this.token, this.ncuenta).subscribe(
      response => {
        if (response.error_message == null) {
          this.fer0310m01 = response;
          this.dmacct = response.DMACCT;
          this.bandera = (this.fer0310m01 == null);
        } else {
          this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
        }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning(<any>error, 'Error', { timeOut: 3000 });
      }

    );
  }

}
