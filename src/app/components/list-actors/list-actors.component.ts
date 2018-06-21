import { Component, OnInit, Input } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.scss']
})
export class ListActorsComponent implements OnInit {

  @Input() public data:ResponseDescriptor;
  public photo;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  onClick(actor) {
    this.router.navigate(['/actor', actor]);
  }


}
