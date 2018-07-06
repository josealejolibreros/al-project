import { Injectable, NgModule } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Response} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class TmdbCreditsServiceService {

  constructor(private  http:HttpClient) { }


  /*Get all the cast of the movie with id=idMovie
  Each one with id, name, character and profile_path*/
  getCredits (idMovie: number) {
    
    return this.http.get('https://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=977cda5d9bfac0a6b0252ef0272785b6')
      .pipe(
        map(
          (data: any) => {
            //console.log(data);
             return data['cast'].map((item) => {
              return {
                id: item.id,
                name: item.name,
                character: item.character,
                profile_path: item.profile_path
              }
            }); 
          }
        )
      );
  }
}
