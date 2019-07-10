import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public person = [];
  public movies = [];
  private personId = null;
  public imgUrl = "https://image.tmdb.org/t/p/w500";

  constructor(
    private _tmdbApiService : TmdbApiService, 
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {

    //TODO: Generate the HTML that uses the people service.

    //Extracts the parameters on the route and assigns it to the movieId attribute.
    this.route.params.subscribe(params => (this.personId = params.id));

    /* Assigns the data from the getActor method to the person attribute. 
       If it does not exist, redirects to the error page. */
    this._tmdbApiService.getActor(this.personId)
    .then(data => this.person = data)
    .catch(error => this.router.navigate(['/error']));

    /* Calls the getPersonMovies method */
    this.getPersonMovies(this.personId);
    setTimeout(() => {
      console.log(this.person);
    }, 1000);
  }

  getPersonMovies(id:number) {
    /* Procedure that assigns the movies in which a person has acted in. */
    let actors: any;
    let i = 0;
    let flag = true;

    /* Assigns the data from the getPopularActors to the actors variable. */
    this._tmdbApiService.getPopularActors().then(data => actors = data.results);

    /* Timeout necessary so the request can be processed.
       TODO: Change the timeout to await */
    setTimeout(() => {

      /* Iterates the actors array and checks if the actor has been found. If it does,
         assigns it's movies to the movies attribute */
      while(i < actors.length && flag == true) {
        if(actors[i].id == this.personId) {
          flag = false;
          this.movies = actors[i].known_for;
        }
      }
    }, 1000);
  }

}
