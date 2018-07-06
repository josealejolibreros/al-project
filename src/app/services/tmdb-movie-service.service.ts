import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from 'rxjs/internal/operators/map';
import {Response} from '@angular/http';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class TmdbMovieServiceService {

  constructor(private  http: Http) { }

  /*Get all top-rated movies on the webpage*/
  getMovies(){
    console.log("a");
    return this.http
    .get("https://api.themoviedb.org/3/movie/top_rated?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page=1")
    .pipe(map(
      (response : Response)=>{
        return response.json().results.map((item)=>{
          return{
            id: item.id,
            title: item.title,
            backdrop_path:item.backdrop_path
          }
      });
      }
    ));
  }

}

