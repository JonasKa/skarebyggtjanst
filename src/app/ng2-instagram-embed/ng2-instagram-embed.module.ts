import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2InstagramEmbedComponent } from './ng2-instagram-embed/ng2-instagram-embed.component';
import {Ng2InstagramEmbedService} from './ng2-instagram-embed.service';
import {HttpModule, JsonpModule} from '@angular/http';
import { Ng2InstagramFeedListComponent } from './ng2-instagram-feed-list/ng2-instagram-feed-list.component';
import { Ng2InstagramImageComponent } from './ng2-instagram-image/ng2-instagram-image.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [Ng2InstagramEmbedComponent, Ng2InstagramFeedListComponent, Ng2InstagramImageComponent],
  exports: [Ng2InstagramEmbedComponent, Ng2InstagramFeedListComponent, Ng2InstagramImageComponent],
  providers: [Ng2InstagramEmbedService],
})
export class Ng2InstagramEmbedModule { }
