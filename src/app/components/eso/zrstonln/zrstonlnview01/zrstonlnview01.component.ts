import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstonlnm01Model } from '../../../../models/zrstonlnm01.models';
import { ZrstonlnService } from '../../../../services/eso/zrstonln.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-zrstonlnview01',
  templateUrl: './zrstonlnview01.component.html',
  providers: [UserService, ZrstonlnService]
})
export class Zrstonlnview01Component implements OnInit {
  title: 'ESO - Pantalla ZRSTONLN';
  public identity;
  public token;

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService,
    private _zrstonlnService: ZrstonlnService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this._router.navigate(['/zrstonlnv2',
                        form.value.anio,
                        form.value.ciclo,
                        form.value.aging,
                        form.value.org,
                        form.value.logo,
                        form.value.procesador,
                        form.value.ncuenta,
                        form.value.ntarjeta,
                        form.value.inicialDesde,
                        form.value.inicialHasta,
                        form.value.finalDesde,
                        form.value.finalHasta,
                        form.value.cycle,
                        form.value.bolsa,
                        form.value.econtable,
                        form.value.categoria,
                        form.value.cpostal,
                        form.value.rt,
                        form.value.staff,
                        form.value.cbalance
                      ]);
  }

}
