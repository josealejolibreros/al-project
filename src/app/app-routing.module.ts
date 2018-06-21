import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PageListsComponent } from './components/page-lists/page-lists.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';


import { TestTmdbMoviesComponent } from './components/test-tmdb-movies/test-tmdb-movies.component';
import { TestTmdbCreditsComponent } from './components/test-tmdb-credits/test-tmdb-credits.component';
import { PageListsActorsComponent } from './components/page-lists-actors/page-lists-actors.component';
import { PageActorDetailComponent } from './components/page-actor-detail/page-actor-detail.component';

const routes: Routes = [
  {
    path: 'search',
    component: PageListsComponent
  },
  {
    path: 'search-actors',
    component: PageListsActorsComponent
  },
  {
    path: 'detail/:id',
    component: PageDetailComponent
  },
  {
    path: 'movies',
    component: TestTmdbMoviesComponent
  },
  {
    path: 'credits/:idMovie',
    component: TestTmdbCreditsComponent
  },
  {
    path: 'actor/:id',
    component: PageActorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
