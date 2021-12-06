import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Component, Input} from "@angular/core";

@Component({
  selector: 'tidigare-jobb-carousel',
  templateUrl: './tidigare-jobb-carousel.component.html',
  styleUrls: ['./tidigare-jobb-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class TidigareJobbCarouselComponent {
  @Input("viewOnly")
  viewOnly: boolean = false;
  @Input("images")
  images: number[] = [4, 5, 6, 2, 7, 3];

  getImagePaths(): string[] {
    return this.images.map((n) => `../../assets/images/references/square/${n}.jpeg`);
  }

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
  }
}
