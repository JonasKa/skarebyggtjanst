import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {InformationComponent} from "./information/information.component";
import {LandingComponent} from "./landing/landing.component";
import {OmComponent} from "./om/om.component";
import {KontaktComponent} from "./kontakt/kontakt.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'information',
    component: InformationComponent
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
export class AppRoutingModule {
}
