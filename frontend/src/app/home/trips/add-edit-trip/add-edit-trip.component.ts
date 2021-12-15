import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import * as L from 'leaflet';
import * as $ from 'jquery';
import { Trip } from 'src/app/interface';



@Component({
  selector: 'app-add-edit-trip',
  templateUrl: './add-edit-trip.component.html',
  styleUrls: ['./add-edit-trip.component.css']
})

export class AddEditTripComponent implements OnInit {

  @Input() trip: Trip = new Trip();

  stationsNames: any = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {

    this.loadStationsNames();
    
    const myMap = L.map('map').setView([33.59, -7.62], 13);
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    const goButton = $('#go');

    var polyline: any;

    const display = () => {
 
      let from_select = $('#from_station option:selected').val();
      let to_select = $('#to_station option:selected').val();
  
      let filteredStations1 = this.stationsNames.filter( function(currentStation1:any) {
        return currentStation1.name == from_select;
      })
  
      let filteredStations2 = this.stationsNames.filter( function(currentStation2:any) {
        return currentStation2.name == to_select;
      })
  
      let station_one = [JSON.parse(filteredStations1[0].loc_stringify).lat, JSON.parse(filteredStations1[0].loc_stringify).lng];
      let station_two = [JSON.parse(filteredStations2[0].loc_stringify).lat, JSON.parse(filteredStations2[0].loc_stringify).lng];
  
      let latlngs = [
        station_one,
        station_two
      ];

      if (polyline) {
        myMap.removeLayer(polyline);
      };
  
      polyline = L.polyline(latlngs, {color: '#FF0000'}).addTo(myMap);
      
      let from = JSON.parse(filteredStations1[0].loc_stringify);
      let to = JSON.parse(filteredStations2[0].loc_stringify);
  
      let latlng1 = L.latLng(from.lat, from.lng);
      let latlng2 = L.latLng(to.lat, to.lng);
  
      let distance = latlng1.distanceTo(latlng2) / 1000;
  
      const speed = 90 // unit: km/h;
  
      this.trip.distance = parseFloat(distance.toFixed(2)) // unit: km;
      this.trip.duration = parseFloat((distance / speed).toFixed(2)) // unit: hour;
  
    }

    goButton.on('click', display);
    
  }

  // Load stations' names
  loadStationsNames() {
    this.service.getStationsNames().subscribe((data: any) => {
      this.stationsNames = data;
    })
  }

  // I used here jQuery temporarily, till I figure out how I can accomplish the same using pure JavaScript

  disable() {
    $('#to_station option').removeAttr("disabled");
    let selected = $('#from_station option:selected').val();
    if (selected != 0) {
      $('#to_station option[value="' + selected + '"]').attr("disabled", "true");
    }
  }

  // Add a trip
  addTrip() {
    let value = {id: this.trip.id, trip_from: this.trip.trip_from, trip_to: this.trip.trip_to, duration: this.trip.duration, distance: this.trip.distance};
    this.service.addTrip(value).subscribe(res => {
      alert(res.toString());
    });
  };

  // Update a trip
  updateTrip(){
    let value = {id: this.trip.id, trip_from: this.trip.trip_from, trip_to: this.trip.trip_to, duration: this.trip.duration, distance: this.trip.distance};
    this.service.updateTrip(value).subscribe(res => {
      alert(res.toString());
    });
  };

}


