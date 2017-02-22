import {Component, OnInit, Input} from '@angular/core';
import {Jsonp} from "@angular/http";
import {Observable} from "rxjs";
import {Ng2InstagramEmbedService} from "../ng2-instagram-embed.service";

@Component({
  selector: 'ng2-instagram-embed',
  templateUrl: './ng2-instagram-embed.component.html',
  styleUrls: ['./ng2-instagram-embed.component.less']
})
export class Ng2InstagramEmbedComponent implements OnInit {

  @Input()
  shortCode: string;
  html: string;

  constructor(private ng2InstagramEmbedService: Ng2InstagramEmbedService) { }

  ngOnInit() {
    this.ng2InstagramEmbedService.getOembedForShortCode(this.shortCode).subscribe(result => this.html = result);
  }

}
