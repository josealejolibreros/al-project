import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from '../../services/detail.service';

import { ActorDescriptor } from '../../types/search.type';

@Component({
  selector: 'app-page-actor-detail',
  templateUrl: './page-actor-detail.component.html',
  styleUrls: ['./page-actor-detail.component.scss']
})
export class PageActorDetailComponent implements OnInit {

  private routerSubscribe: any;
  public actor: ActorDescriptor = new ActorDescriptor();
  public strGenres: string = '';
  public strProductionCompanies: string = '';
  public strProductionCountries: string = '';
  public strSpokenLanguages: string = '';

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let idActor: number = +params['id'];
      this.detailService.getActorDetail(idActor).subscribe(
        (data) => {
         
          this.actor= data;
        }
      );
    });
  }

  goToSearch() {
    this.router.navigate(['search-actors']);
  }

}
