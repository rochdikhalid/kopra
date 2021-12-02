import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleets',
  templateUrl: './fleets.component.html',
  styleUrls: ['./fleets.component.css']
})

export class FleetsComponent implements OnInit {

  public headerInfo: any = {
    headerTitle: 'Fleets',
    headerDescription: 'View all created fleets',
    headerBtn: 'Add new fleet'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
