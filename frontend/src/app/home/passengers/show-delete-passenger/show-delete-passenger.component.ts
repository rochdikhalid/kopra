import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Commuter } from 'src/app/interface';

@Component({
  selector: 'app-show-delete-passenger',
  templateUrl: './show-delete-passenger.component.html',
  styleUrls: ['./show-delete-passenger.component.css']
})

export class ShowDeletePassengerComponent implements OnInit {

  @Input() public parentData: any;

  constructor(private service: SharedService) { }

  commutersList: any = [];
  modalTitle!: string;
  ActivateAddEditCommuterComp: boolean = false;
  commuter: Commuter = new Commuter();
  
  ngOnInit(): void {
    this.refreshCommutersList();
  }

  refreshCommutersList() {
    this.service.getCommutersList().subscribe(data => {
      this.commutersList = data;
    });
  };

  addClick() {

    this.commuter = {
      id: 0,
      name: '',
      email: '',
      dob: '',
      gender: 'Alien',
      subscription: 'Monthly'
    };

    this.modalTitle = "Add Passenger";
    this.ActivateAddEditCommuterComp = true;

  }

  editClick(item: any) {
    this.commuter = item;
    this.modalTitle = "Edit Passenger";
    this.ActivateAddEditCommuterComp = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteCommuter(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshCommutersList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCommuterComp = false;
    this.refreshCommutersList();
  }
  
}
