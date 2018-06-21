import { Component, OnInit, NgModule } from '@angular/core';

import { TmdbCreditsServiceService } from "../../services/tmdb-credits-service.service";
import { ActivatedRoute,Router } from '@angular/router';
import {Response} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';




@Component({
  selector: 'app-test-tmdb-credits',
  templateUrl: './test-tmdb-credits.component.html',
  styleUrls: ['./test-tmdb-credits.component.scss']
})



export class TestTmdbCreditsComponent implements OnInit {

  private routerSubscribe:any;
  public cast : any;
  previousUrl: string;
  



  constructor(private tmdbCreditServiceService: TmdbCreditsServiceService,
  private route : ActivatedRoute,private router: Router) {

   
   }

  

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let idMovie: number = +params['idMovie'];
      this.tmdbCreditServiceService.getCredits(idMovie).subscribe(
        (data:any) => {
          this.cast = data
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  
  goToMovies() {
    this.router.navigate(['/movies']);
  }


  onClick(actor) {
    this.router.navigate(['/actor', actor]);
  }

}
