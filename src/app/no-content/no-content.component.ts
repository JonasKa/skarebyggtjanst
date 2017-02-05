import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `Ooops, du hittade en död länk`,
  styles: [``]
})
export class NoContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
