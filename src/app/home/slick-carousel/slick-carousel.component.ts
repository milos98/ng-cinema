import { Component, OnInit, Input } from '@angular/core';

import { Category } from './../../category';

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.css']
})
export class SlickCarouselComponent implements OnInit {
  @Input() movieCategory: Category;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<button type="button"
                        class="slick-prev"
                        style="left: 0;
                               z-index: 1;
                               width:5%;"
                >Previous</button>`,
    nextArrow: `<button type="button" 
                        class="slick-next" 
                        style="right: 0;
                               z-index: 1;
                               width:5%"
                >Next</button>`,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

  };

  constructor() { }

  ngOnInit(): void {

  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  trackByFn(index, movie) {
    return movie._id;
  }

}
