import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public people = []

  public imgUrl = "https://image.tmdb.org/t/p/w500";

  //TODO: Generate the HTML that uses the people service.

  constructor(private _tmdbApiService : TmdbApiService) { }

  ngOnInit() {
    /* Assigns the data from the getPopularActors method to the people attribute. */
    this._tmdbApiService.getPopularActors().then(data => this.people = data.results);
    setTimeout(() => {
      console.log(this.people);
    }, 1000);
  }

}
