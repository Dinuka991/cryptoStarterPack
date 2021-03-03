import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './project/aesUtils/home.component';
import { RSAutilsComponent } from './project/rsautils/rsautils.component';

const routes: Routes = [
  {path:'' , component: RSAutilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
