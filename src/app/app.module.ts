import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErbjudandeComponent } from './erbjudande/erbjudande/erbjudande.component';
import {NoContentComponent} from "./no-content/no-content.component";
import { LandingComponent } from './landing/landing.component';
import { OmComponent } from './om/om.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HeroComponent } from './hero/hero.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ErbjudandeComponent,
    NoContentComponent,
    LandingComponent,
    OmComponent,
    KontaktComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
