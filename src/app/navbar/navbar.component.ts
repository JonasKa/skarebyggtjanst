import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 // @ViewChild('navbarToggler') navbarToggler:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  navBarTogglerIsVisible() {
   // return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    //if (this.navBarTogglerIsVisible()) {
      console.log("ska collapsa!");
     // this.navbarToggler.nativeElement.click();
   // }
  }

}
