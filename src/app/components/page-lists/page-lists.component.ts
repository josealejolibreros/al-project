import { Component, OnInit } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';
import { GenreDescriptor, GenresDescriptor } from '../../types/genres.type.';
import { GenresService } from '../../services/genres.service';

@Component({
  selector: 'app-page-lists',
  templateUrl: './page-lists.component.html',
  styleUrls: ['./page-lists.component.scss']
})
export class PageListsComponent implements OnInit {

  public data: ResponseDescriptor = new ResponseDescriptor();
  public genres: GenresDescriptor = new GenresDescriptor();

  constructor (
    private genresService: GenresService
  ){ }

  ngOnInit() {
    this.genresService.getAll().subscribe(
      (data) => {
        this.genres = data;
      }
    );
  }

  onSearch(data:ResponseDescriptor) {
    this.data = data;
  }

}
