// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Material & flex imports
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatButtonModule,MatCardModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule } from '@angular/material';


// Our components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListsComponent } from './components/page-lists/page-lists.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { PageActorDetailComponent } from './components/page-actor-detail/page-actor-detail.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { StatsComponent } from './components/stats/stats.component';

import { GenresComponent } from './components/genres/genres.component';
import {TestTmdbMoviesComponent} from './components/test-tmdb-movies/test-tmdb-movies.component';
import {TestTmdbCreditsComponent} from './components/test-tmdb-credits/test-tmdb-credits.component';
import {PageListsActorsComponent} from './components/page-lists-actors/page-lists-actors.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { SearchActorsComponent } from './components/search-actors/search-actors.component';
import { StatsActorsComponent } from './components/stats-actors/stats-actors.component';


@NgModule({
  declarations: [
    AppComponent,
    PageListsComponent,
    PageDetailComponent,
    SearchComponent,
    ListComponent,
    StatsComponent,
    GenresComponent,
    TestTmdbMoviesComponent,TestTmdbCreditsComponent,
    
    PageListsActorsComponent,
    PageActorDetailComponent,
    ListActorsComponent,
    SearchActorsComponent,
    StatsActorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,BrowserModule, 
    HttpModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PageListsComponent, PageDetailComponent, SearchComponent, ListComponent, StatsComponent, GenresComponent,TestTmdbCreditsComponent,TestTmdbMoviesComponent,PageListsActorsComponent]
})
export class AppModule { }
