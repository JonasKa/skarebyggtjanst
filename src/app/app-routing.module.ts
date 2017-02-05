import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ErbjudandeComponent} from "./erbjudande/erbjudande/erbjudande.component";
import {LandingComponent} from "./landing/landing.component";
import {OmComponent} from "./om/om.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {NoContentComponent} from "./no-content/no-content.component";

const routes: Routes = [
  {
    path: '',
   component: LandingComponent
   // component: NoContentComponent
  },
  {
    path: 'erbjudande',
    component: ErbjudandeComponent
  },
  {
    path: 'om',
    component: OmComponent
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'kontakt/:tack',
    component: KontaktComponent
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
