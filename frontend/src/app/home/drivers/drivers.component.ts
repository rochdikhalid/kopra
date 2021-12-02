import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent implements OnInit {

  public headerInfo: any = {
    headerTitle: 'Drivers',
    headerDescription: 'View all created drivers',
    headerBtn: 'Add new driver'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
