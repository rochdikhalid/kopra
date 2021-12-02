import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { Fleet } from 'src/app/interface';

@Component({
  selector: 'app-add-edit-fleet',
  templateUrl: './add-edit-fleet.component.html',
  styleUrls: ['./add-edit-fleet.component.css']
})

export class AddEditFleetComponent implements OnInit {

  @Input() fleet: Fleet = new Fleet();

  stationsNames: any = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {

    this.loadStationsNames();
  
  }

  // Load stations' names
  loadStationsNames() {
    this.service.getStationsNames().subscribe((data: any) => {
      this.stationsNames = data;
    })
  }

  // Add a fleet
  addFleet() {
    let value = {id: this.fleet.id, size: this.fleet.size, brand: this.fleet.brand, fleet_type: this.fleet.fleet_type, fleet_model: this.fleet.fleet_model, station: this.fleet.station};
    this.service.addFleet(value).subscribe(res => {
      alert(res.toString());
    })
  }

  // Update a fleet
  updateFleet(){
    let value = {id: this.fleet.id, size: this.fleet.size, brand: this.fleet.brand, fleet_type: this.fleet.fleet_type, fleet_model: this.fleet.fleet_model, station: this.fleet.station};
    this.service.updateFleet(value).subscribe(res => {
      alert(res.toString());
    });
  }

}
