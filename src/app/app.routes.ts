import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //esto es para las urls que no matchean con nada vayan al home
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
