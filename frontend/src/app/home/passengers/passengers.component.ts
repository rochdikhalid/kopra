import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})

export class PassengersComponent implements OnInit {

  public headerInfo: any = {
    headerTitle: 'Passengers',
    headerDescription: 'View all created passengers',
    headerBtn: 'Add new passenger'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
