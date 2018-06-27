import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//rutas
import { app_routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Tar0030view01Component } from './components/inf5/tar0030/tar0030view01/tar0030view01.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/login/register.component';
import { Tar0030view02Component } from './components/inf5/tar0030/tar0030view02/tar0030view02.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Tar0030view01Component,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    Tar0030view02Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
