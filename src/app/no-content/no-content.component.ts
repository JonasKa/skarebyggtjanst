import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'no-content',
  template: `<div class='container'>Ooops, du hittade en död länk</div>`,
  styles: [``]
})
export class NoContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}
