import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;

  menuVisible = false;

  constructor() {
  }

  ngOnInit() {
  }


  toggleNav() {
    this.menuVisible = !this.menuVisible;
  }

  calculateClasses() {
    return {
      'show': this.menuVisible
    };
  }

  collapseNav() {
    if (this.menuVisible) {
      console.log("ska collapsa!");
      this.navbarToggler.nativeElement.click();
    }
  }

}
