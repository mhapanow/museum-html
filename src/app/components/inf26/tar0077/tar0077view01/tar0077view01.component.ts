import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-tar0077view01',
  templateUrl: './tar0077view01.component.html',
  styles: []
})
export class Tar0077view01Component implements OnInit {
  title = 'INF 26 - Pantalla TAR 0077';
  codigo = '';
  S0OPC = '';
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private toastr: ToastrService
  ) { this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
  }

  ngOnInit() {
  }

  onSubmit(form) {
    if (this.S0OPC === '') {
      this.toastr.warning('Debe de ingresar un valor', 'Validacion', { timeOut: 3000 });
    } else {
      this._router.navigate(['/tar0077v3/' + this.S0OPC]);
    }
  }

}
