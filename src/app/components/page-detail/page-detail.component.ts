import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from '../../services/detail.service';
import { MovieDescriptor } from '../../types/detail.type';
import { HostListener } from '@angular/core';

import { NgModule } from '@angular/core';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})




export class PageDetailComponent implements OnInit {

  private routerSubscribe: any;
  public movie: MovieDescriptor = new MovieDescriptor();
  public strGenres: string = '';
  public strProductionCompanies: string = '';
  public strProductionCountries: string = '';
  public strSpokenLanguages: string = '';
  public idMovie:number;
  public  prevScrollpos = window.pageYOffset;

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    private router: Router
  ) { }


/*
  scrollToTop(){
    this.goToUp.scrollToTop();
  }
  */
 



  /*
  @HostListener('scroll', ['$event'])
  onScroll(event) {
  console.log("a");
  var currentScrollPos = window.pageYOffset;
  if (this.prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  this.prevScrollpos = currentScrollPos;
  
}
*/

/*
@HostListener('window:scroll', ['$event'])
onWindowScroll($event) {
    console.log("scrolling...");
    var currentScrollPos = window.pageYOffset;
  if (this.prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    
  }
  this.prevScrollpos = currentScrollPos;
  
}
*/





  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let idMovie: number = +params['id'];
      this.idMovie=idMovie;
      this.detailService.getDetail(idMovie).subscribe(
        (data) => {
          this.strProductionCompanies = data.production_companies.map((element)=>{return element.name}).join(', ');
          this.strProductionCountries = data.production_countries.map((element)=>{return element.name}).join(', ');
          this.strSpokenLanguages = data.spoken_languages.map((element)=>{return element.name}).join(', ');
          this.strGenres = data.genres.map((element)=>{return element.name}).join(', ');
          this.movie= data;
        }
      );
    });


  }

  goToSearch() {
    this.router.navigate(['search']);
  }


  

  


}
