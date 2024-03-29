import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  tack = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.tack = params['tack'];
      });
  }
}
