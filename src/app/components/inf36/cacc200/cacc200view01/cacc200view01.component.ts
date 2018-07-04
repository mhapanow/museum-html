import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { Cacc200Service } from '../../../../services/inf36/cacc200.service';
import { Cacc200m01Models } from '../../../../models/cacc200m01.models';

@Component({
  selector: 'app-cacc200view01',
  templateUrl: './cacc200view01.component.html',
  providers: [UserService, Cacc200Service]
})
export class Cacc200view01Component implements OnInit {
  title = 'INF 36 - Pantalla CACC 200';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _Cacc200Service: Cacc200Service
  ) { }

  ngOnInit() {
  }

  cacr205() {
    this._router.navigate(['/cacr205v1']);
  }

  cacr210() {
    this._router.navigate(['/cacr210v1']);
  }

  cacr216() {
    this._router.navigate(['/cacr216v1']);
  }

}
