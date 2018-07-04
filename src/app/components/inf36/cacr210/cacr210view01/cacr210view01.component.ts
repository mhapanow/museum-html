import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Cacr210Service } from '../../../../services/inf36/cacr210.service';
import { Cacr215Service } from '../../../../services/inf36/cacr215.service';
import { Cacr215m01Model } from '../../../../models/cacr215m01.models';


@Component({
  selector: 'app-cacr210view01',
  templateUrl: './cacr210view01.component.html',
  providers: [UserService, Cacr210Service, Cacr215Service]
})
export class Cacr210view01Component implements OnInit {
  title = 'INF 36 - Pantalla CACR 210';

  public identity;
  public token;
  public cacr215: Cacr215m01Model[];

  constructor(private _userService: UserService,
    private _cacr215Service: Cacr215Service,
    private _toastr: ToastrService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.carcr215v1Lis();
  }

  cacr210v1Form() {

  }

  carcr215v1Lis() {
    this._cacr215Service.getCacr215View01(this.token).subscribe(
      response => {
         if (response.error_message == null ) {
           this.cacr215 = response.data;
         } else {
           this._toastr.warning(response.error_message, 'Validación', { timeOut: 3000 });
         }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning('ERROR.: Servidor No Found.', 'Error.', { timeOut: 3000 });
      }
    );
  }

}
