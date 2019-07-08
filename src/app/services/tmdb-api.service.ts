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

  getFromTMDB(search: string) : Promise<any> {
    // Using template string, which is backtick ``
    let url = `${this.baseUrl}${search}?api_key=${this.apiKey}&language=${this.language}`;
    console.log("url", url);
    return this._http.get(url).toPromise();
  }

  getPopularMovies() : Promise<any> {
    return this.getFromTMDB("movie/popular");
  }

  getCredits(id:number) : Promise<any> {
    return this.getFromTMDB(`movie/${id}/credits`);
  }
}
