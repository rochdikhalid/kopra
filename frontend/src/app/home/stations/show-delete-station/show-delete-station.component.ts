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
