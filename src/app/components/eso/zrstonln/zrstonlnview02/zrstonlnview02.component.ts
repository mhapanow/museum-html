import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { Zrstonlnm02Model } from '../../../../models/zrstonlnm02.models';
import { ZrstonlnService } from '../../../../services/eso/zrstonln.service';

@Component({
  selector: 'app-zrstonlnview02',
  templateUrl: './zrstonlnview02.component.html',
  providers: [UserService, ZrstonlnService]
})
export class Zrstonlnview02Component implements OnInit {
  title: 'ESO - Pantalla ZRSTONLN';
  public identity;
  public token;
  public zrstonlnm02: Zrstonlnm02Model[];

  public rowsOnPage = 5;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _zrstonlnService: ZrstonlnService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.zrstonlnv02();
  }

  zrstonlnv02() {

    let _w1afac: String;
    let _w1cifa: String;
    let _w1agig: String;
    let _w1orgn: String;
    let _w1prcd: String;
    let _w1acns: String;
    let _w1cans: String;
    let _w1bbad: String;
    let _w1bbah: String;
    let _w1ebad: String;
    let _w1ebah: String;
    let _w1cydu: String;
    let _w1obol: String;
    let _w1estc: String;
    let _w1cacl: String;
    let _w1cpos: String;
    let _w1retr: String;
    let _w1func: String;
    let _w1crba: String;
    let _w1logo: String;
    this._route.params.subscribe(params => {
      _w1afac = params['w1afac'];
      _w1cifa = params['w1cifa'];
      _w1agig = params['w1agig'];
      _w1orgn = params['w1orgn'];
      _w1prcd = params['w1prcd'];
      _w1acns = params['w1acns'];
      _w1cans = params['w1cans'];
      _w1bbad = params['w1bbad'];
      _w1bbah = params['w1bbah'];
      _w1ebad = params['w1ebad'];
      _w1ebah = params['w1ebah'];
      _w1cydu = params['w1cydu'];
      _w1obol = params['w1obol'];
      _w1estc = params['w1estc'];
      _w1cacl = params['w1cacl'];
      _w1cpos = params['w1cpos'];
      _w1retr = params['w1retr'];
      _w1func = params['w1func'];
      _w1crba = params['w1crba'];
      _w1logo = params['w1logo'];
      this._zrstonlnService.getZrstonlnView02(this.token, _w1afac,
_w1cifa,
_w1agig,
_w1orgn,
_w1prcd,
_w1acns,
_w1cans,
_w1bbad,
_w1bbah,
_w1ebad,
_w1ebah,
_w1cydu,
_w1obol,
_w1estc,
_w1cacl,
_w1cpos,
_w1retr,
_w1func,
_w1crba,
_w1logo).subscribe(
        response => {
          if (response.error_message == null) {
            this.zrstonlnm02 = response.data;
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
