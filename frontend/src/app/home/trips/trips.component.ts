import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsComponent implements OnInit {

  public headerInfo: any = {
    headerTitle: 'Trips',
    headerDescription: 'View all created trips',
    headerBtn: 'Add new trip'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
