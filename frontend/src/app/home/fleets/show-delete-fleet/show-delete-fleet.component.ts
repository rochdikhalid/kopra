import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Fleet } from 'src/app/interface';



@Component({
  selector: 'app-show-delete-fleet',
  templateUrl: './show-delete-fleet.component.html',
  styleUrls: ['./show-delete-fleet.component.css']
})
export class ShowDeleteFleetComponent implements OnInit {

  @Input() public parentData: any;

  constructor(private service: SharedService) { }

  fleetsList: any = [];
  modalTitle!: string;
  ActivateAddEditFleetComp: boolean = false;
  fleet: Fleet = new Fleet();
  
  ngOnInit(): void {
    this.refreshFleetsList();
  }

  refreshFleetsList() {
    this.service.getFleetsList().subscribe(data => {
      this.fleetsList = data;
    });
  };

  addClick() {
    this.fleet = {
      id: 0,
      size: 0,
      brand: '',
      fleet_type: '',
      fleet_model: '',
      station: ''
    };
    this.modalTitle = "Add Fleet";
    this.ActivateAddEditFleetComp = true;
  }

  editClick(item: any) {
    this.fleet = item;
    this.modalTitle = "Edit Fleet";
    this.ActivateAddEditFleetComp = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteFleet(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshFleetsList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditFleetComp = false;
    this.refreshFleetsList();
  }
  
}
