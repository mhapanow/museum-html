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
    Ccrr1948view01Component
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
    { path: 'fer1020v2/:ncuenta', component: Fer1020view02Component },
    { path: 'fer1020v3/:nbase', component: Fer1020view03Component },
    { path: 'ccrr0500v1', component: Ccrr0500view01Component },
    { path: 'ccrr0500v2/:nsucursal/:ndivision/:nestado', component: Ccrr0500view02Component },
    { path: 'ccrr0500v3/:nreferencia', component: Ccrr0500view03Component },
    { path: 'ccrr0515v1/:ncredito', component: Ccrr0515view01Component },
    { path: 'ccrr0580v1/:ncredito', component: Ccrr0580view01Component },
    { path: 'ccrr0580v2/:ncredito', component: Ccrr0580view02Component },
    { path: 'ccrr1948v1/:ncredito', component: Ccrr1948view01Component },
    { path: 'logout/:sure', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRoutingProviders: any[] = [];
export const app_routing: ModuleWithProviders = RouterModule.forRoot(app_routes, { useHash: true });
