import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserModel } from '../../models/user.models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit, OnDestroy  {
  body = document.getElementsByTagName('body')[0];
  public user: UserModel;
  public token;
  public identity;
  public status: string;
  public mensaje: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = new UserModel('', '', '', '', '', '', '', '', '', '');
   }

  ngOnInit() {
    this.logout();
    this.body.classList.add('gray-bg');
  }
  ngOnDestroy() {
    this.body.classList.remove('gray-bg');
  }

  onSubmit(form) {

    this._userService.iniciarSesion(this.user).subscribe(
      response => {
        // token
        if (response.error_message == null) {
          this.token = response.token;
          //Guardar al LocalStorage
          localStorage.setItem('token', this.token);

          //Objeto usuario identificado
          this._userService.iniciarSesion(this.user, true).subscribe(
            response => {
              this.identity = response;
              localStorage.setItem('identity', JSON.stringify(this.identity));
              //Redirección
              this._router.navigate(['home']);
            },
            error => {
              console.log(<any>error);
            });
        } else {
          this.status = 'error';
          this.mensaje = 'Error en el inicio de sesión';
        }
      },
      error => {
        this.status = 'error';
          this.mensaje = 'Error en la conexión con el servidor.';
        console.log(<any>error);
      });
  }
  logout() {
    console.log('entro a logout');

    this._route.params.subscribe(params => {

      let logout = +params['sure'];
      console.log('con params ' + logout);
       if (logout == 1) {
         this._userService.cerrarSesion().subscribe(
            response => {
              if (response.error_message != null) {
                this.status = 'error';
                this.mensaje = 'Error en el inicio de sesión';
              }
            },
            error => {
              console.log(<any>error);
            });

        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identity = null;
        this.token = null;
        //redireccion
        this._router.navigate(['login']);
      }
    });
  }

}
