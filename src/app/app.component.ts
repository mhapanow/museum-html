import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements DoCheck  {
  public identity;
  public token;
  constructor(private _userService: UserService, private _router: Router) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    // if (this.token == null) {
    //   this._router.navigate(['login']);
    // }
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
