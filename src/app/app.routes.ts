import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    Tar0030view01Component,
    Tar0030view02Component
} from './components/index.paginas';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'tar0030', component: Tar0030view01Component },
    { path: 'tar0030t', component: Tar0030view02Component },
    { path: 'logout/:sure', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRoutingProviders: any[] = [];
export const app_routing: ModuleWithProviders = RouterModule.forRoot(app_routes, { useHash: true });
