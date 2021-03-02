import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './project/home/home.component';
import { RSAutilsComponent } from './project/rsautils/rsautils.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RSAutilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
