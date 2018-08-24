import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstdspsm03Model } from '../../../../models/zrstdspsm03.models';
import { ZrstdspsService } from '../../../../services/eso/zrstdsps.service';

@Component({
  selector: 'app-zrstdspsview03',
  templateUrl: './zrstdspsview03.component.html',
  providers: [UserService, ZrstdspsService]
})
export class Zrstdspsview03Component implements OnInit {
  title: 'ESO - Pantalla ZRSTDSPS';
  public identity;
  public token;
  public zrstdspsm03: Zrstdspsm03Model[];

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstdspsService: ZrstdspsService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.zrstdspsv03();
  }

  zrstdspsv03() {
    let categoria: String;
    this._route.params.subscribe(params => {
      categoria = params['categoria'];
      this._zrstdspsService.getZrstdspsView03(this.token, categoria).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstdspsm03 = response.data;
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
