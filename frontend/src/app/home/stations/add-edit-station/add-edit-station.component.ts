import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import * as L from 'leaflet';
import { Station } from 'src/app/interface';



@Component({
  selector: 'app-add-edit-station',
  templateUrl: './add-edit-station.component.html',
  styleUrls: ['./add-edit-station.component.css']
})

export class AddEditStationComponent implements OnInit {

  @Input() station: Station = new Station();

  constructor(private service: SharedService) {}

  ngOnInit(): void {
  
    const myMap = L.map('map').setView([33.59, -7.62], 13);
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    var station_marker: any;

    const onMapClick = (e: any) => {
      let loc_string = e.latlng.toString();
      let loc_stringify = JSON.stringify(e.latlng);
      this.station.location_string = loc_string;
      this.station.loc_stringify = loc_stringify;
      let stationIcon = L.icon({
        iconUrl: 'assets/icons/station.png',
        iconSize: [24, 24], // size of the icon
      });
      if (station_marker) {
        myMap.removeLayer(station_marker)
      }
      station_marker = L.marker(JSON.parse(loc_stringify), {icon: stationIcon, draggable: false}).addTo(myMap);
    }
    
    myMap.on('click', onMapClick);

  }

  // Add a station
  addStation() {
    let value = {id: this.station.id, name: this.station.name, location_string: this.station.location_string, loc_stringify: this.station.loc_stringify, capacity: this.station.capacity, area: this.station.area};
    this.service.addStation(value).subscribe(res => {
      alert(res.toString());
    })
  }

  // Update a station
  updateStation(){
    let value = {id: this.station.id, name: this.station.name, location_string: this.station.location_string, loc_stringify: this.station.loc_stringify, capacity: this.station.capacity, area: this.station.area};
    this.service.updateStation(value).subscribe(res => {
      alert(res.toString());
    });
  }

} 
