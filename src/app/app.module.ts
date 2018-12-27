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
import { Ccrr0500view01Component } from './components/cre/ccrr0500/ccrr0500view01/ccrr0500view01.component';
import { Ccrr0500view02Component } from './components/cre/ccrr0500/ccrr0500view02/ccrr0500view02.component';
import { Ccrr0500view03Component } from './components/cre/ccrr0500/ccrr0500view03/ccrr0500view03.component';
import { Ccrr0515view01Component } from './components/cre/ccrr0515/ccrr0515view01/ccrr0515view01.component';
import { Ccrr0580view01Component } from './components/cre/ccrr0580/ccrr0580view01/ccrr0580view01.component';
import { Ccrr0580view02Component } from './components/cre/ccrr0580/ccrr0580view02/ccrr0580view02.component';
import { Ccrr1948view01Component } from './components/cre/ccrr1948/ccrr1948view01/ccrr1948view01.component';
import { Zrstdspsview01Component } from './components/eso/zrstdsps/zrstdspsview01/zrstdspsview01.component';
import { Zrstdspsview02Component } from './components/eso/zrstdsps/zrstdspsview02/zrstdspsview02.component';
import { Zrstdspsview03Component } from './components/eso/zrstdsps/zrstdspsview03/zrstdspsview03.component';
import { Zrstdspsview04Component } from './components/eso/zrstdsps/zrstdspsview04/zrstdspsview04.component';
import { Zrstdspsview05Component } from './components/eso/zrstdsps/zrstdspsview05/zrstdspsview05.component';
import { Zrstdspsview06Component } from './components/eso/zrstdsps/zrstdspsview06/zrstdspsview06.component';
import { Zrstonlnview01Component } from './components/eso/zrstonln/zrstonlnview01/zrstonlnview01.component';
import { Zrstonlnview02Component } from './components/eso/zrstonln/zrstonlnview02/zrstonlnview02.component';
import { Zrstreclview01Component } from './components/eso/zrstrecl/zrstreclview01/zrstreclview01.component';
import { Zrstreclview02Component } from './components/eso/zrstrecl/zrstreclview02/zrstreclview02.component';
import { Zrstrecmview01Component } from './components/eso/zrstrecm/zrstrecmview01/zrstrecmview01.component';
import { Zrstrecmview02Component } from './components/eso/zrstrecm/zrstrecmview02/zrstrecmview02.component';
import { LpadPipe } from './pipes/lpad.pipe';
import { VacioPipe } from './pipes/vacio.pipe';
import { FormcuentaPipe } from './pipes/formcuenta.pipe';
import { FormmonedaPipe } from './pipes/formmoneda.pipe';
import { SinfechaPipe } from './pipes/sinfecha.pipe';
import { CeroPipe } from './pipes/cero.pipe';
import { FormmonedaceroPipe } from './pipes/formmonedacero.pipe';
import { Fer0310view01Component } from './components/inf1/fer0310/fer0310view01/fer0310view01.component';
import { Fer0310view02Component } from './components/inf1/fer0310/fer0310view02/fer0310view02.component';
import { Fer0310view03Component } from './components/inf1/fer0310/fer0310view03/fer0310view03.component';
import { FormnumcuentaPipe } from './pipes/formnumcuenta.pipe';
import { FormfechadosPipe } from './pipes/formfechados.pipe';
import { Fer0320view01Component } from './components/inf1/fer0320/fer0320view01/fer0320view01.component';
import { Fer0320view02Component } from './components/inf1/fer0320/fer0320view02/fer0320view02.component';
import { Fer0330view01Component } from './components/inf1/fer0330/fer0330view01/fer0330view01.component';
import { Fer0330view02Component } from './components/inf1/fer0330/fer0330view02/fer0330view02.component';
import { Cgrrcrecview01Component } from './components/inf1/cgrrcrec/cgrrcrecview01/cgrrcrecview01.component';
import { Cgrrcrecview02Component } from './components/inf1/cgrrcrec/cgrrcrecview02/cgrrcrecview02.component';
import { Cgrrcrecview03Component } from './components/inf1/cgrrcrec/cgrrcrecview03/cgrrcrecview03.component';
import { Cgrrcrecview04Component } from './components/inf1/cgrrcrec/cgrrcrecview04/cgrrcrecview04.component';

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
    Ccrr0500view01Component,
    Ccrr0500view02Component,
    Ccrr0500view03Component,
    Ccrr0515view01Component,
    Ccrr0580view01Component,
    Ccrr0580view02Component,
    Ccrr1948view01Component,
    Zrstdspsview01Component,
    Zrstdspsview02Component,
    Zrstdspsview03Component,
    Zrstdspsview04Component,
    Zrstdspsview05Component,
    Zrstdspsview06Component,
    Zrstonlnview01Component,
    Zrstonlnview02Component,
    Zrstreclview01Component,
    Zrstreclview02Component,
    Zrstrecmview01Component,
    Zrstrecmview02Component,
    LpadPipe,
    VacioPipe,
    FormcuentaPipe,
    FormmonedaPipe,
    SinfechaPipe,
    CeroPipe,
    FormmonedaceroPipe,
    Fer0310view01Component,
    Fer0310view02Component,
    Fer0310view03Component,
    FormnumcuentaPipe,
    FormfechadosPipe,
    Fer0320view01Component,
    Fer0320view02Component,
    Fer0330view01Component,
    Fer0330view02Component,
    Cgrrcrecview01Component,
    Cgrrcrecview02Component,
    Cgrrcrecview03Component,
    Cgrrcrecview04Component,
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
