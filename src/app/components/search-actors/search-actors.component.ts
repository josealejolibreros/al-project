import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchActorsService } from '../../services/search-actors.service';
import { ResponseDescriptor } from '../../types/search.type';


@Component({
  selector: 'app-search-actors',
  templateUrl: './search-actors.component.html',
  styleUrls: ['./search-actors.component.scss']
})
export class SearchActorsComponent implements OnInit {

  public term: string = 'bruce';
  @Output() onSearch: EventEmitter<ResponseDescriptor> = new EventEmitter();

  constructor(
    private searchService: SearchActorsService
  ) { }

  ngOnInit() {
  }

  searchActors() {
    this.searchService.search(this.term).subscribe(
      (data)=>{
        this.onSearch.emit(data);
      }
    );
  }

}