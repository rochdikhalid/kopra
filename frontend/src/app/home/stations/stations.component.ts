import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})

export class StationsComponent implements OnInit {

  public headerInfo: any = {
    headerTitle: 'Stations',
    headerDescription: 'View all created stations',
    headerBtn: 'Add new station'
  };

  public display: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
}
