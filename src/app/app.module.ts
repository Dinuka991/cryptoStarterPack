import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './project/aesUtils/home.component';
import { RSAutilsComponent } from './project/rsautils/rsautils.component';
import { HttpClientModule } from '@angular/common/http';
import { Rsa2UtilsComponent } from './project/rsa2-utils/rsa2-utils.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RSAutilsComponent,
    Rsa2UtilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
