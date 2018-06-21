import { Component, OnInit } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';


@Component({
  selector: 'app-page-lists-actors',
  templateUrl: './page-lists-actors.component.html',
  styleUrls: ['./page-lists-actors.component.scss']
})
export class PageListsActorsComponent implements OnInit {

  ngOnInit() {

  }


  public data: ResponseDescriptor = new ResponseDescriptor();

  constructor (){ }

 

  onSearch(data:ResponseDescriptor) {
    this.data = data;
    console.log(data);
  }

}
