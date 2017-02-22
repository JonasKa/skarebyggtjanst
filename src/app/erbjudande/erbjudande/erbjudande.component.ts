import { Component, OnInit } from '@angular/core';
import {Jsonp, Http} from '@angular/http';

@Component({
  selector: 'app-erbjudande',
  templateUrl: './erbjudande.component.html',
  styleUrls: ['./erbjudande.component.less']
})
export class ErbjudandeComponent implements OnInit {

  private instaImageHtml: string;
  private instaImage: string;

  constructor(private jsonp: Jsonp, private http: Http) { }

  ngOnInit() {
    this.jsonp.request('https://api.instagram.com/oembed?url=http://instagr.am/p/BQbKDCoFPPn/&callback=JSONP_CALLBACK').
      subscribe(result => {
        let jsonResult = result.json();
        this.instaImageHtml = jsonResult.html;
        console.log('instaImageHtml: ' + this.instaImageHtml);
       //;

    });

  }

}
