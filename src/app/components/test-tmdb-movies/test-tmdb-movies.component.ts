import { Component, OnInit } from '@angular/core';
import {TmdbMovieServiceService} from '../../services/tmdb-movie-service.service';
import {Response} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
@Component({
  selector: 'app-test-tmdb-movies',
  templateUrl: './test-tmdb-movies.component.html',
  styleUrls: ['./test-tmdb-movies.component.scss']
})
export class TestTmdbMoviesComponent implements OnInit {

  public movies;
  
  constructor(private tmdbMovieServiceService: TmdbMovieServiceService) { }

  ngOnInit() {
    this.tmdbMovieServiceService.getMovies().subscribe(
      (data: Response)=>{
        console.log(data);
        //console.log(data.json().results.map((item)=>{console.log(item);}));
        this.movies = data;
        //this.movies = movies.results;


      },
      (error : Response)=>{
        console.log(error.json());
      }


    );
    
  }

}
