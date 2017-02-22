import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2InstagramEmbedComponent } from './ng2-instagram-embed/ng2-instagram-embed.component';
import {Ng2InstagramEmbedService} from "./ng2-instagram-embed.service";
import {HttpModule, JsonpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [Ng2InstagramEmbedComponent],
  exports: [Ng2InstagramEmbedComponent],
  providers: [Ng2InstagramEmbedService],
})
export class Ng2InstagramEmbedModule { }
