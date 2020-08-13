import { Component, OnInit } from '@angular/core';

import { MovieService } from './../movie.service';
import { Category } from './../category';
import { Movie } from './../movie'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    const currentDate = new Date();
    this.movieService.getMovies().subscribe(data => {
      let available: Category = {name:'Now Showing', data: []};
      let soon: Category = {name:'Comming Soon', data: []};

      data.forEach(movie => {
        const movieReleaseDate = new Date(movie.releaseDate);

        if (movieReleaseDate > currentDate) {
          available.data.push(movie);
        }
        else {
          soon.data.push(movie);
        }
      });

      this.categories.push(available, soon);
      console.log(this.categories);
    });
  }

}
