import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserModel } from '../../models/user.models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [UserService]
})
export class RegisterComponent implements OnInit, OnDestroy  {
  body = document.getElementsByTagName('body')[0];
  public user: UserModel;
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
    this.body.classList.add('gray-bg');
  }
  ngOnDestroy() {
    this.body.classList.remove('gray-bg');
  }

  onSubmit(form) {
    // this._userService.register(this.user).subscribe(
    //   response => {
    //     if (response.status == 'success') {
    //       this.status = response.status;
    //       //vaciar formulario
    //       this.user = new User(1, 'ROLE_USER', '', '', '', '');
    //       form.reset();
    //     } else {
    //       this.status = 'error';
    //       this.mensaje = response.message;
    //     }
    //   },
    //   error => {
    //     console.log(<any>error);
    //   }

    // );
  }

}
