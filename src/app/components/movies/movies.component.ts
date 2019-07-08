import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../../services/tmdb-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies = [];
  public moviess = [];
  public imgUrl = "https://image.tmdb.org/t/p/w500";

  constructor(private _tmdbApiService : TmdbApiService) { }

  ngOnInit() {
    this._tmdbApiService.getPopularMovies().then(data => this.movies = data.results);
    this._tmdbApiService.getCredits(820).then(datas => this.moviess = datas.results);
    setTimeout(() => {
      console.log("this.movies", this.movies);
      console.log("moviess", this.moviess);
    }, 1000);
  }

}
