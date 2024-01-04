import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {ApiService} from "./api.service";
import {ConfigBuilder} from "./config-builder";
import {ApiService as SDK, BootstrapComponent, FusioSdkModule} from "ngx-fusio-sdk";
import {WelcomeComponent} from './welcome/welcome.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FusioSdkModule.forRoot(ConfigBuilder.build())
  ],
  providers: [
    {
      provide: SDK,
      useExisting: ApiService
    }
  ],
  bootstrap: [BootstrapComponent]
})
export class AppModule { }
