import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountContainerComponent, AccountRoute, AuthorizationRoute, isAuthenticated} from "ngx-fusio-sdk";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent, canActivate: [isAuthenticated]},
  {path: 'welcome', component: WelcomeComponent, canActivate: [isAuthenticated]},

  {path: 'account', component: AccountContainerComponent, canActivate: [isAuthenticated], children: AccountRoute.getAll()},
];

routes.push(...AuthorizationRoute.getAll());

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
