import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movie = [];
  public cast = [];
  public similar = [];
  private movieId = null;
  public imgUrl = "https://image.tmdb.org/t/p/w500";


  constructor(
    private _tmdbApiService : TmdbApiService, 
    private route : ActivatedRoute,
    private router: Router) { }

  //TODO: Generate the HTML that uses the movie service.

  ngOnInit() {

    //Extracts the parameters on the route and assigns it to the movieId attribute.
    this.route.params.subscribe(params => (this.movieId = params.id));

    /* Assigns the data from the getMovie method to the movie attribute. 
       If it does not exist, redirects to the error page. */
    this._tmdbApiService.getMovie(this.movieId)
    .then(data => this.movie = data)
    .catch(error => this.router.navigate(['/error']));

    /* Assigns the data from the getCredits method to the cast attribute. 
       If it does not exist, redirects to the error page. */
    this._tmdbApiService.getCredits(this.movieId)
    .then(data => this.cast = data.cast)
    .catch(error => console.log("An error has ocurred."));

    /* Assigns the data from the getCredits method to the cast attribute. 
       If it does not exist, redirects to the error page. */
       this._tmdbApiService.getSimilar(this.movieId)
       .then(data => this.similar = data.results)
       .catch(error => console.log("An error has ocurred."));
  }

}
