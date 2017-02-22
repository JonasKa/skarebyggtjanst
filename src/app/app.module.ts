import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErbjudandeComponent } from './erbjudande/erbjudande/erbjudande.component';
import {NoContentComponent} from "./no-content/no-content.component";
import { LandingComponent } from './landing/landing.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HeroComponent } from './hero/hero.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OmCardComponent } from './card-components/om-card/om-card.component';
import { KontaktaOssCardComponent } from './card-components/kontakta-oss-card/kontakta-oss-card.component';
import {OmComponent} from "./om/om.component";
import { ErbjudandeCardComponent } from './card-components/erbjudande-card/erbjudande-card.component';
import {Ng2InstagramEmbedModule} from "./ng2-instagram-embed/ng2-instagram-embed.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    OmComponent,
    ErbjudandeComponent,
    NoContentComponent,
    LandingComponent,
    KontaktComponent,
    HeroComponent,
    OmCardComponent,
    KontaktaOssCardComponent,
    ErbjudandeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    Ng2InstagramEmbedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
