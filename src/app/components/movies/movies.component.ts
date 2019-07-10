import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../../services/tmdb-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies = [];
  public imgUrl = "https://image.tmdb.org/t/p/w500";

  constructor(private _tmdbApiService : TmdbApiService) { }

  ngOnInit() {

    /* Assigns the data from the getPopularMovies method to the movies attribute. */
    this._tmdbApiService.getPopularMovies().then(data => this.movies = data.results);
    setTimeout(() => {
      console.log("this.movies", this.movies);
    }, 1000);
  }

}
