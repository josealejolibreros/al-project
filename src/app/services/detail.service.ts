import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { MovieDescriptor } from '../types/detail.type';
import { ActorDescriptor } from '../types/search.type';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private url: string = "https://api.themoviedb.org/3/";
  private key: string = "?api_key=977cda5d9bfac0a6b0252ef0272785b6";
  constructor(private http: HttpClient) {  }

  getDetail(idMovie: number) {
    return this.http
      .get(this.url + "movie/" + idMovie + this.key)
      .pipe(
        map((data)=>{
          return MovieDescriptor.import(data);
        })
      );
  }

  getActorDetail(idActor: number) {
    
    return this.http
      .get(this.url + "person/" + idActor + this.key)
      .pipe(
        map((data)=>{
          return ActorDescriptor.import(data);
        })
      );
  }

}
