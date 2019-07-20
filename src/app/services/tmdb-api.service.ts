import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  private baseUrl = "https://api.themoviedb.org/3/";
  private apiKey = "49e26bd62a6532f455d5a22dd06b314a";
  private language = "es-US"
  constructor(private _http: HttpClient) { }

  // TODO: Change every method to an asynchronous method.

  getFromTMDB(search: string) : Promise<any> {
    // Returns a request using a search string as a promise.
    // Using template string, which is backtick ``
    let url = `${this.baseUrl}${search}?api_key=${this.apiKey}&language=${this.language}`;

    /* FIXME: Fix the return of promise in order to avoid getting error in console.
    *
    return new Promise((resolve, reject) => {
      resolve(this._http.get(url));
      reject(Error);
    }*/
    return this._http.get(url).toPromise();
  }

  getPopularMovies() : Promise<any> {
    // Returns the popular movies.
    return this.getFromTMDB("movie/popular");
  }

  getMovie(id:number) : Promise<any> {
    // Returns the details of a particular movie.
    return this.getFromTMDB(`movie/${id}`);
  }

  getCredits(id:number) : Promise<any> {
    // Returns the credits of a particular movie.
    return this.getFromTMDB(`movie/${id}/credits`);
  }

  getSimilar(id:number) : Promise<any> {
    // Returns similar movies of a particular movie.
    return this.getFromTMDB(`movie/${id}/similar`);
  }

  getPopularActors() : Promise<any> {
    // Returns the popular actors.
    return this.getFromTMDB("person/popular");
  }

  getActor(id:number) : Promise<any> {
    // Returns the details of a particular actor.
    return this.getFromTMDB(`person/${id}`);
  }

}
