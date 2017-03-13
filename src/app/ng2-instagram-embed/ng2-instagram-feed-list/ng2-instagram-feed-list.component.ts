import {Component, OnInit, Input} from "@angular/core";
import {Ng2InstagramEmbedService} from "../ng2-instagram-embed.service";

@Component({
  selector: 'ng2-instagram-feed-list',
  templateUrl: './ng2-instagram-feed-list.component.html',
  styleUrls: ['./ng2-instagram-feed-list.component.less']
})
export class Ng2InstagramFeedListComponent implements OnInit {

  @Input()
  userName: string;

  @Input()
  numberOfFeeds: number;

  feed: any[];

  constructor(private ng2InstagramEmbedService: Ng2InstagramEmbedService) {
  }

  ngOnInit() {
    this.ng2InstagramEmbedService.getAllShortCodesForUserName(this.userName).subscribe(result => {
      console.log('resultat: ' + JSON.stringify(result));
    });
  }

}
