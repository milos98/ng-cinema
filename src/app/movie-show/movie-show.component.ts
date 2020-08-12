import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css']
})
export class MovieShowComponent implements OnInit {
  randomMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      data => {
        const numberOfMovies = data.length;
        const randomeIndex = Math.floor(Math.random() * numberOfMovies);

        this.randomMovie = data[randomeIndex];
      });
  }

  setBackground() {
    const styles = {
      'background-image': 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url(' + this.randomMovie.image + ')',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    };
    return styles;
  }

}
