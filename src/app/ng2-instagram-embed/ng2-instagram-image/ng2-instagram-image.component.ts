import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ng2-instagram-image',
  templateUrl: './ng2-instagram-image.component.html',
  styleUrls: ['./ng2-instagram-image.component.less']
})
export class Ng2InstagramImageComponent implements OnInit {

  @Input()
  shortCode: string;

  constructor() { }

  ngOnInit() {
  }

}
