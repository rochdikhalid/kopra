import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { Trip } from 'src/app/interface';

@Component({
  selector: 'app-show-delete-trip',
  templateUrl: './show-delete-trip.component.html',
  styleUrls: ['./show-delete-trip.component.css']
})

export class ShowDeleteTripComponent implements OnInit {

  @Input() public parentData: any;

  constructor(private service: SharedService) { }

  tripsList: any = [];
  modalTitle!: string;
  ActivateAddEditTripComp: boolean = false;
  trip: Trip = new Trip();
  
  ngOnInit(): void {
    this.refreshTripsList();
  }

  refreshTripsList() {
    this.service.getTripsList().subscribe(data => {
      this.tripsList = data;
    });
  };

  addClick() {

    this.trip = {
      id: 0,
      trip_from: '-- Select From --',
      trip_to: '-- Select To --',
      duration: 0,
      distance: 0
    };

    this.modalTitle = "Add Trip";
    this.ActivateAddEditTripComp = true;

  }

  editClick(item: any){
    this.trip = item;
    this.modalTitle = "Edit Trip";
    this.ActivateAddEditTripComp = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteTrip(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshTripsList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTripComp = false;
    this.refreshTripsList();
  }

}
