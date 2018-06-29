import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchActorsService } from '../../services/search-actors.service';
import { ResponseDescriptor } from '../../types/search.type';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search-actors',
  templateUrl: './search-actors.component.html',
  styleUrls: ['./search-actors.component.scss']
})
export class SearchActorsComponent implements OnInit {

  public term: string = 'bruce';
  @Output() onSearch: EventEmitter<ResponseDescriptor> = new EventEmitter();

  public name:string ="";
  public mymodel:any;
  /*Autocomplete */
   
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  public myControl = new FormControl();




  constructor(
    private searchService: SearchActorsService
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

  searchActors(value) {
    
    this.searchService.search(value).subscribe(
      (data)=>{
        this.onSearch.emit(data);
      }
    );
  }



  onKeydown(event) {
    if (event.key === "Enter") {
      
      this.searchActors(this.mymodel);
    }
  }


  valuechange(newValue) {
    this.mymodel = newValue;
    this.searchToAutocomplete();
  }


  searchToAutocomplete() {
    
    this.searchService.search(this.mymodel).subscribe(
      (data)=>{
        
        this.options=[];
        let i=0;
        for(let actor of data.actors_results){
          if(i==3){
            break;
          }else{
            this.options.push(actor.name);
          }
        }
      }
    );
   
    
}

}