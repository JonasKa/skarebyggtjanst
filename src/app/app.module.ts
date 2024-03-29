import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {InformationComponent} from './information/information.component';
//import {NoContentComponent} from "./no-content/no-content.component";
import {LandingComponent} from './landing/landing.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {OmCardComponent} from './card-components/om-card/om-card.component';
import {KontaktaOssCardComponent} from './card-components/kontakta-oss-card/kontakta-oss-card.component';
import {OmComponent} from "./om/om.component";
import {ErbjudandeCardComponent} from './card-components/erbjudande-card/erbjudande-card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TidigareJobbCarouselComponent} from "./tidigare-jobb-carousel/tidigare-jobb-carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    OmComponent,
    InformationComponent,
    // NoContentComponent,
    LandingComponent,
    KontaktComponent,
    OmCardComponent,
    KontaktaOssCardComponent,
    ErbjudandeCardComponent,
    TidigareJobbCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
