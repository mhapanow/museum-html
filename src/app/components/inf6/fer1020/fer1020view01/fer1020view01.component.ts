import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-fer1020view01',
  templateUrl: './fer1020view01.component.html',
  styles: []
})
export class Fer1020view01Component implements OnInit {
  title = 'INF 6 - Pantalla FER 1020';
  public identity;
  public token;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit(fer1020v1Form: NgForm) {
    if (fer1020v1Form.value.cuenta > 0 ) {
      // mostrar pantalla 02
      this._router.navigate(['/fer1020v2', fer1020v1Form.value.cuenta]);

    } else if (fer1020v1Form.value.base > 0) {
      // mostrar pantalla 03
      this._router.navigate(['/fer1020v3', fer1020v1Form.value.base]);
    } else {
      this._toastr.warning('Error en la Vista, debe ingresar al menos un valor en Cuenta o en Base', 'Validación', { timeOut: 3000 });
    }

  }

}
