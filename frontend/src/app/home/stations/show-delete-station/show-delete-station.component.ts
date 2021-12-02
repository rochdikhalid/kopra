import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { Station } from 'src/app/interface';

@Component({
  selector: 'app-show-delete-station',
  templateUrl: './show-delete-station.component.html',
  styleUrls: ['./show-delete-station.component.css']
})

export class ShowDeleteStationComponent implements OnInit {

  @Input() public parentData: any;

  /*
  public stationsData: any = [
    {id: 0, name: 'name 1', location: 'location 1', capacity: 'capacity 1', area: 'area 1'},
    {id: 1, name: 'name 2', location: 'location 2', capacity: 'capacity 2', area: 'area 2'},
    {id: 2, name: 'name 3', location: 'location 3', capacity: 'capacity 3', area: 'area 3'},
  ]
  */

  constructor(private service: SharedService) { }

  stationsList: any = [];
  modalTitle!: string;
  ActivateAddEditStationComp: boolean = false;
  station: Station = new Station();
  
  ngOnInit(): void {
    this.refreshStationsList();
  }

  refreshStationsList() {
    this.service.getStationsList().subscribe(data => {
      this.stationsList = data;
    });
  };

  addClick() {

    this.station = {
      id: 0,
      name: '',
      location_string: '',
      loc_stringify: '',
      capacity: 0,
      area: 0
    };

    this.modalTitle = "Add Station";
    this.ActivateAddEditStationComp = true;

  }

  editClick(item: any){
    this.station = item;
    this.modalTitle = "Edit Station";
    this.ActivateAddEditStationComp = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteStation(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshStationsList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditStationComp = false;
    this.refreshStationsList();
  }

}
