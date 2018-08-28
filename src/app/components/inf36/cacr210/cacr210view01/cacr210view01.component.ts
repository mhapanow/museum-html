import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../../services/user.service';
import { Cacr210Service } from '../../../../services/inf36/cacr210.service';
import { Cacr215Service } from '../../../../services/inf36/cacr215.service';
import { Cacr210m01Model } from '../../../../models/cacr210m01.models';
import { Cacr215m01Model } from '../../../../models/cacr215m01.models';

// Declaramos las variables para jQuery
declare var jQuery: any;
 declare var $: any;

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
  public cacr210m01: Cacr210m01Model[];


  public FechaSeleccion: String = '';
  public CodigoSucursal: String = '';
  public CodigoEstado: String = '';
  public CodigoMotivoRechazo: String = '';

  private numero = 0;

  constructor(private _userService: UserService,
    private _cacr215Service: Cacr215Service,
    private _cacr210Service: Cacr210Service,
    private _toastr: ToastrService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.carcr215v1Lis();
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#data_1 .input-group.date').datepicker({
        format: 'dd/mm/yyyy',
        todayBtn: 'linked',
        language: 'es',
        keyboardNavigation: false,
        forceParse: false,
        autoclose: false
      });
    });
  }

  carcr215v1Lis() {
    this.cacr215 = null;
    this._cacr215Service.getCacr215View01(this.token, 'mrmrec').subscribe(
      response => {
         if (response.error_message == null ) {
           this.cacr215 = response.data;
         } else {
           this._toastr.warning(response.error_message, 'Se ha producido un error:', { timeOut: 3000 });
         }
      },
      error => {
        console.log(<any>error);
        this._toastr.warning('ERROR.: Servidor No Found.', 'Error.', { timeOut: 3000 });
      }
    );
  }

  onSubmit(form: NgForm) {
    this.FechaSeleccion = form.value.fechaSeleccion;
    this.CodigoSucursal = form.value.codigoSucursal;
    this.CodigoEstado = form.value.codigoEstado;
    this.CodigoMotivoRechazo = form.value.codigoMotivoRechazo;

    this.cacr210m01 = null;

    if (this.FechaSeleccion === '' || this.CodigoSucursal === '' || this.CodigoEstado === '' || this.CodigoMotivoRechazo === '') {
      this._toastr.warning('Debe ingresar todos los campos', 'Validación', { timeOut: 3000 });
    } else {
      this.CodigoEstado = 'R';
      form.value.CodigoEstado = 'R';
      // form.value.codigoEstado = '34';
      // promesa
      this.numero = this.numero + 10;
      const promesa = new Promise( (resolve, reject) => {
            this._cacr210Service.getCacr210View01(this.token, this.FechaSeleccion, this.CodigoSucursal, this.CodigoEstado,
              this.CodigoMotivoRechazo, 'HIFSEL,HIBRCH,HIDATE,HIACCT').subscribe(
              response => {
                if (response.error_message == null) {
                  if (response.data.length === 0) {
                    this._toastr.warning('No se han encontado datos', 'Respuesta', { timeOut: 3000 });
                    reject();
                  } else {
                    this.cacr210m01 = response.data;

                    resolve(this.cacr210m01);
                  }
                } else {
                  this._toastr.warning(response.error_message, 'Se ha producido un error', { timeOut: 3000 });
                  reject();
                }
              },
              error => {
                console.log(<any>error);
                this._toastr.warning(<any>error, 'Error', { timeOut: 3000 });
                reject();
              }
            );
      }); // fin promesa

      promesa.then(() => {
        setTimeout(() => {
        //   // jQuery(function ($) {
        //     $('.table').footable({
        //         'sorted': true,
        //         'direction': 'DESC'

        //     });
        //   // });
          $('.table').footable();
        //   // var ft = fooTable.init('#append-example');
        //   // $('.table').footable({
        //   //   'rows': this.cacr210m01
        //   // });
        //   console.log(this.cacr210m01);
        //    $(document).ready(function () {
        //   if (this.numero === 10) {
        //     $('.table').footable();
        //   }else{
        //     $('table').footable();
        //   }
        // });

        }, 2000);
        // $(document).ready(function () {
        //   $('.table').footable();
        // });
      },
        function (reason) {
          console.log('error ', reason);
        });
      // console.log(this.numero);
      setTimeout(() => {
        // jQuery(function ($) {
        // $('.table').footable({
        //   'sorted': true,
        //   'direction': 'DESC'

        // });
        // });
        // $('.table').footable();
        // var ft = fooTable.init('#append-example');
        // $('.table').footable({
        //   'rows': this.cacr210m01
        // });
        
            // $('.table').footable({
            //   'rows': [{
            //     'id': {
            //       'options': {
            //         'sortValue': 'My Sort Value'
            //       }
            //     }
            //   }]
            // });
          

  

      }, 2000);
      // setTimeout(function () {
      //   $('table').footable({
      //     breakpoints: {
      //       phone: 480 + this.numero,
      //       tablet: 680
      //     }
      //   });
      //   $('.table').footable({
      //     'sorting': {
      //       'enabled': true
      //     }
      //   });
      // }, 3000);
    }
  }

}
