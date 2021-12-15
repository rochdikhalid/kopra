import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Trip, Commuter } from 'src/app/interface';
import * as L from 'leaflet';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public headerInfo: any = {
    headerTitle: 'Dashboard',
    headerDescription: 'Take a closer look',
    headerBtn: 'Filter view'
  };

  constructor(private service: SharedService) { }

  stationsList: any = [];
  tripsList: any = [];
  tripsInfo: any = [];
  commutersList: any = [];

  trip: Trip = new Trip();
  commuter: Commuter = new Commuter();

  ngOnInit(): void {
    
    const myMap = L.map('map').setView([33.59, -7.62], 13);
  
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    let stationIcon = L.icon({
      iconUrl: 'assets/icons/station.png',
      iconSize: [24, 24], // size of the icon
    });

    let markersList: any = [];

    this.service.getStationsList().subscribe(data => {
      this.stationsList = data;
      for (let item of this.stationsList) {
        L.marker(JSON.parse(item.loc_stringify), {icon: stationIcon, draggable: false}).bindPopup(item.name).addTo(myMap);
      }
    });

    this.refreshTripsList();
    this.refreshCommutersList();
    
  }

  refreshTripsList() {
    this.service.getTripsList().subscribe(data => {
      this.tripsList = data;
      this.tripsInfo = this.tripsList.reduce(function(prev: any, curr: any) {
        return {
          distance: parseFloat((prev.distance + curr.distance).toFixed(2)),
          duration: parseFloat((prev.duration + curr.duration).toFixed(2))
        };
      });
    });
  };

  refreshCommutersList() {
    this.service.getCommutersList().subscribe(data => {
      this.commutersList = data;
    });
  };

}
