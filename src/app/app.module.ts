import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataTableModule } from 'angular2-datatable';

// rutas
import { app_routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Tar0030view01Component } from './components/inf5/tar0030/tar0030view01/tar0030view01.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/login/register.component';
import { Tar0030view02Component } from './components/inf5/tar0030/tar0030view02/tar0030view02.component';
import { Cacc200view01Component } from './components/inf36/cacc200/cacc200view01/cacc200view01.component';
import { Tar0077view01Component } from './components/inf26/tar0077/tar0077view01/tar0077view01.component';
import { Tar0077view02Component } from './components/inf26/tar0077/tar0077view02/tar0077view02.component';
import { Tar0077view03Component } from './components/inf26/tar0077/tar0077view03/tar0077view03.component';
import { Cacr205view01Component } from './components/inf36/cacr205/cacr205view01/cacr205view01.component';
import { Cacr210view01Component } from './components/inf36/cacr210/cacr210view01/cacr210view01.component';
import { Cacr210view02Component } from './components/inf36/cacr210/cacr210view02/cacr210view02.component';
import { Cacr216view01Component } from './components/inf36/cacr216/cacr216view01/cacr216view01.component';
import { Cacr205view02Component } from './components/inf36/cacr205/cacr205view02/cacr205view02.component';
import { Fer1020view01Component } from './components/inf6/fer1020/fer1020view01/fer1020view01.component';
import { Fer1020view02Component } from './components/inf6/fer1020/fer1020view02/fer1020view02.component';
import { Fer1020view03Component } from './components/inf6/fer1020/fer1020view03/fer1020view03.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Tar0030view01Component,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    Tar0030view02Component,
    Cacc200view01Component,
    Tar0077view01Component,
    Tar0077view02Component,
    Tar0077view03Component,
    Cacr205view01Component,
    Cacr210view01Component,
    Cacr216view01Component,
    Cacr205view02Component,
    Fer1020view01Component,
    Fer1020view02Component,
    Fer1020view03Component,
    Cacr210view02Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    DataTableModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
