import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccrr0500view01',
  templateUrl: './ccrr0500view01.component.html',
  styles: []
})
export class Ccrr0500view01Component implements OnInit {
  title = 'CRE - Pantalla CCRR 0500';
  public numcredito: String = '';
  public numsucursal: String = '';
  public numdivision: String = '';
  public numestado: String = '';
  public numreferencia: String = '';

  constructor() { }

  ngOnInit() {
  }

}
