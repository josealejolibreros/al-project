import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ResponseDescriptor } from '../../types/search.type';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public term: string = 'amelie';
  public movies: any[];
  public name:string ="";
  public mymodel:any;
  /*Autocomplete */
   
  options: string[] = [];
  filteredOptions: Observable<string[]>;



  @Output() onSearch: EventEmitter<ResponseDescriptor> = new EventEmitter();
  public myControl = new FormControl();
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options;//.filter(option => option.toLowerCase().includes(filterValue));
  }

  search(value) {
      this.searchService.search(value).subscribe(
        (data)=>{
          this.onSearch.emit(data);
        }
      );
  }


  searchToAutocomplete(value) {
    this.searchService.search(value).subscribe(
      (data)=>{
        this.options=[];
        let i=0;
        for(let movie of data.results){
          if(i==3){
            break;
          }else{
            this.options.push(movie.title);
          }
        }
      }
    );
    console.log(this.options);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.search(this.mymodel);
    }
  }


  valuechange(newValue) {
    this.mymodel = newValue;
    this.searchToAutocomplete(this.mymodel);
  }

}

























