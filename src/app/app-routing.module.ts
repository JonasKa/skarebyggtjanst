import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErbjudandeComponent} from "./erbjudande/erbjudande/erbjudande.component";

const routes: Routes = [
  {
    path: 'erbjudande',
    component: ErbjudandeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
