import { Component, OnInit, Input } from '@angular/core';

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
  @Input() public data:any;

  private routerSubscribe:any;
  public cast : any;
  previousUrl: string;
  public idMovie:number;
  



  constructor(private tmdbCreditServiceService: TmdbCreditsServiceService,
  private route : ActivatedRoute,private router: Router) {
    
   
   }

  

  ngOnInit() {
    this.idMovie=this.data.idMovie;

    this.routerSubscribe = this.route.params.subscribe(params => {
      //let idMovie: number = +params['idMovie'];
      this.tmdbCreditServiceService.getCredits(this.idMovie).subscribe(
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
