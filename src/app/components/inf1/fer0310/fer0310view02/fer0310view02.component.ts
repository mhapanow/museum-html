import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { Fer0310Service } from '../../../../services/inf1/fer0310.service';
import { Fer0310m02Model } from '../../../../models/fer0310m02.models';

import { Location } from '@angular/common';


@Component({
  selector: 'app-fer0310view02',
  templateUrl: './fer0310view02.component.html',
  providers: [UserService, Fer0310Service]
})
export class Fer0310view02Component implements OnInit {
	title = 'INF 1 - Pantalla FER 0310';
  	public identity;
  	public token;
  	public fer0310m02: Fer0310m02Model;

  	public rowsOnPage = 5;

  constructor(
  	private _userService: UserService,
  	private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _Fer0310Service: Fer0310Service,
    private _location: Location) { 
			this.identity = this._userService.getIdentity();
			this.token = this._userService.getToken();
			this.fer0310m02 = new Fer0310m02Model('', '', '', '', '', '', '', '', '', '',
												'' );
  }

  ngOnInit() {
  	this.getFer0310v02();
  }

   backClicked() {
    this._location.back();
  }

  getFer0310v02() {
  	 this._route.params.subscribe(params => {
		    this._Fer0310Service.getFer0310View02(this.token, params['ncuenta']).subscribe(
		      response => {
		        if (response.error_message == null) {
		          this.fer0310m02 = response;
		        } else {
		          this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
		        }
		      },
		      error => {
		        console.log(<any>error);
		        this._toastr.warning(<any>error, 'Error', { timeOut: 3000 });
		      }

		    );
    });
  }

}
