import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './project/aesUtils/home.component';
import { Rsa2UtilsComponent } from './project/rsa2-utils/rsa2-utils.component';
import { RSAutilsComponent } from './project/rsautils/rsautils.component';

const routes: Routes = [
  {path:'' , component: Rsa2UtilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
