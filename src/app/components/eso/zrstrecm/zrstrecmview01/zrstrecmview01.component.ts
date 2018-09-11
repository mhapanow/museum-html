import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstrecmm01Model } from '../../../../models/zrstrecmm01.models';
import { ZrstrecmService } from '../../../../services/eso/zrstrecm.service';

@Component({
  selector: 'app-zrstrecmview01',
  templateUrl: './zrstrecmview01.component.html',
  providers: [UserService, ZrstrecmService]
})
export class Zrstrecmview01Component implements OnInit {
  title: 'ESO - Pantalla ZRSTRECM';
  public identity;
  public token;
  public zrstrecmm01: Zrstrecmm01Model;

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstrecmService: ZrstrecmService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.zrstrecmm01 = new Zrstrecmm01Model('', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.zrstrecmv01();
  }

  zrstrecmv01() {
    let meorg: String;
    let melogo: String;
    let mencct: String;
    let meyfac: String;
    let meaafc: String;
    let mecifa: String;
    let meagig: String;
    this._route.params.subscribe(params => {
      meorg = params['meorg'];
      melogo = params['melogo'];
      mencct = params['mencct'];
      meyfac = params['meyfac'];
      meaafc = params['meaafc'];
      mecifa = params['mecifa'];
      meagig = params['meagig'];
      this._zrstrecmService.getZrstrecmView01(this.token, meorg, melogo, mencct, meyfac, meaafc, mecifa, meagig).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstrecmm01 = response;
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
