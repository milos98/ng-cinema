import { Component, OnInit, Input } from '@angular/core';

import { Movie } from './../../../movie';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() movieInput: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  setBgImg() {
    const styles = {
      'background-image': 'url(' + this.movieInput.image + ')',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    };
    return styles;
  }

}
