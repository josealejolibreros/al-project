import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PageListsComponent } from './components/page-lists/page-lists.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { TestTmdbMoviesComponent } from './components/test-tmdb-movies/test-tmdb-movies.component';
import { TestTmdbCreditsComponent } from './components/test-tmdb-credits/test-tmdb-credits.component';

const routes: Routes = [
  {
    path: 'search',
    component: PageListsComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
