import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../services/user.service';
// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;
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

    $(document).ready(function () {
      $('#data_range .input-daterange').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
      });
    });


  }

    lPads(valor: String) {
    if (valor.length === 0 || valor.length >= 10) {
      return valor;
    } else {
      return new Array(1 + 10 - valor.length).join('0') + valor;
    }
  }


  onSubmit(fer1020v1Form: NgForm) {
    let fechainicio = fer1020v1Form.value.vigenciad.replace('/', '');
    fechainicio = fechainicio.replace('/', '');

    let fechafin = fer1020v1Form.value.vigenciah.replace('/', '');
    fechafin = fechafin.replace('/', '');

    if (fer1020v1Form.value.cuenta > 0 ) {
      fer1020v1Form.value.cuenta = this.lPads(fer1020v1Form.value.cuenta);
      // mostrar pantalla 02
      this._router.navigate(['/fer1020v2', fer1020v1Form.value.cuenta, (fer1020v1Form.value.adelantos) ? 'X' : '',
        (fer1020v1Form.value.descubierto) ? 'X' : '', (fer1020v1Form.value.exceso) ? 'X' : '',
        fechainicio, fechafin,  fer1020v1Form.value.importe ]);

    } else if (fer1020v1Form.value.base > 0) {
      // mostrar pantalla 03
      this._router.navigate(['/fer1020v3', fer1020v1Form.value.base, (fer1020v1Form.value.adelantos) ? 'X' : '',
        (fer1020v1Form.value.descubierto) ? 'X' : '', (fer1020v1Form.value.exceso) ? 'X' : '',
        fechainicio, fechafin, fer1020v1Form.value.importe]);
    } else {
      this._toastr.warning('Error en la Vista, debe ingresar al menos un valor en Cuenta o en Base', 'Validación', { timeOut: 3000 });
    }

  }

}
