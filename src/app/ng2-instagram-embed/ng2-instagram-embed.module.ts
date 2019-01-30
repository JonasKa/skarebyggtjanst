import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2InstagramEmbedComponent } from './ng2-instagram-embed/ng2-instagram-embed.component';
import {Ng2InstagramEmbedService} from './ng2-instagram-embed.service';
import { Ng2InstagramImageComponent } from './ng2-instagram-image/ng2-instagram-image.component';
import {HttpClientJsonpModule} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  declarations: [Ng2InstagramEmbedComponent, Ng2InstagramImageComponent],
  exports: [Ng2InstagramEmbedComponent, Ng2InstagramImageComponent],
  providers: [Ng2InstagramEmbedService],
})
export class Ng2InstagramEmbedModule { }
