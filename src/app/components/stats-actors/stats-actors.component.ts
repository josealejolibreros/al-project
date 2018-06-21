import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-actors',
  templateUrl: './stats-actors.component.html',
  styleUrls: ['./stats-actors.component.scss']
})
export class StatsActorsComponent implements OnInit {

  @Input() public data: any;

  constructor() { }

  ngOnInit() {
  }

}
