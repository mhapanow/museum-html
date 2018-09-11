import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    Tar0030view01Component,
    Tar0030view02Component,
    Cacc200view01Component,
    Tar0077view01Component,
    Tar0077view02Component,
    Tar0077view03Component,
    Cacr205view01Component,
    Cacr205view02Component,
    Cacr210view01Component,
    Cacr210view02Component,
    Cacr216view01Component,
    Fer1020view01Component,
    Fer1020view02Component,
    Fer1020view03Component,
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
} from './components/index.paginas';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'tar0077v1', component: Tar0077view01Component},
    { path: 'tar0077v2', component: Tar0077view02Component},
    { path: 'tar0077v3/:id', component: Tar0077view03Component},
    { path: 'tar0030', component: Tar0030view01Component },
    { path: 'tar0030t/:ncuenta', component: Tar0030view02Component },
    { path: 'cacc200v1', component: Cacc200view01Component },
    { path: 'cacr205v1', component: Cacr205view01Component },
    { path: 'cacr205v2/:ncuenta/:clave', component: Cacr205view02Component },
    { path: 'cacr210v1', component: Cacr210view01Component },
    { path: 'cacr210v2/:ncuenta/:clave', component: Cacr210view02Component },
    { path: 'cacr216v1', component: Cacr216view01Component },
    { path: 'fer1020v1', component: Fer1020view01Component },
    { path: 'fer1020v2/:ncuenta/:waca/:wpto/:wtod/:wvigd/:wvigh/:wimp', component: Fer1020view02Component },
    { path: 'fer1020v3/:nbase/:waca/:wpto/:wtod/:wvigd/:wvigh/:wimp', component: Fer1020view03Component },
    { path: 'ccrr0500v1', component: Ccrr0500view01Component },
    { path: 'ccrr0500v2/:nsucursal/:ndivision/:nestado', component: Ccrr0500view02Component },
    { path: 'ccrr0500v3/:nreferencia', component: Ccrr0500view03Component },
    { path: 'ccrr0515v1/:ncuota/:npres', component: Ccrr0515view01Component },
    { path: 'ccrr0580v1/:ncredito', component: Ccrr0580view01Component },
    { path: 'ccrr0580v2/:ncredito/:ncuo/:arch', component: Ccrr0580view02Component },
    { path: 'ccrr1948v1/:ncredito/:banco/:ncuo/:total', component: Ccrr1948view01Component },
    { path: 'zrstdspsv1/:ncuenta', component: Zrstdspsview01Component },
    { path: 'zrstdspsv2/:ncuenta', component: Zrstdspsview02Component },
    // { path: 'zrstdspsv3:/dsorg:/dslogo:/dscuenta:/dscent:/dsaño:/dscic:/dsag', component: Zrstdspsview03Component },
    { path: 'zrstdspsv4/:meyfac/:meaafc/:mecifa/:meagig/:melogo/:mencct', component: Zrstdspsview04Component },
    { path: 'zrstdspsv5/:meorg/:melogo/:mencct/:meyac/:meaafc/:mecifa/:meagig', component: Zrstdspsview05Component },
    { path: 'zrstdspsv6/:meorg/:melogo/:mencct/:meyac/:meaafc/:mecifa/:meagig', component: Zrstdspsview06Component },
    { path: 'zrstonlnv1', component: Zrstonlnview01Component },
    // tslint:disable-next-line:max-line-length
    { path: 'zrstonlnv2/:w1afac/:w1cifa/:w1agig/:w1orgn/:w1prcd/:w1acns/:w1cans/:w1bbad/:w1bbah/:w1ebad/:w1ebah/:w1cydu/:w1obol/:w1estc/:w1cacl/:w1cpos/:w1retr/:w1func/:w1crba/:w1logo', component: Zrstonlnview02Component },
    { path: 'zrstrecmv1/:meorg/:melogo/:mencct/:meyfac/:meaafc/:mecifa/:meagig', component: Zrstrecmview01Component },
    { path: 'zrstrecmv2/:meorg/:melogo/:mencct/:meyfac/:meaafc/:mecifa/:meagig', component: Zrstrecmview02Component },
    { path: 'zrstreclv1/:meorg/:melogo/:mencct/:meyfac/:meaafc/:mecifa/:meagig/:cuerpo', component: Zrstreclview01Component },
    { path: 'zrstreclv2/:meorg/:melogo/:mencct/:meyfac/:meaafc/:mecifa/:meagig/:cuerpo', component: Zrstreclview02Component },
    { path: 'logout/:sure', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRoutingProviders: any[] = [];
export const app_routing: ModuleWithProviders = RouterModule.forRoot(app_routes, { useHash: true });


