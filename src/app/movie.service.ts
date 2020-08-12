import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  Movies: Observable<Movie[]>;

  constructor(private httpClient: HttpClient) {  }

  getMovies(): Observable<Movie[]> {
    this.Movies =  this.httpClient.get<Movie[]>('/assets/movies.json');
    return this.Movies;
  }

}
