import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Driver } from 'src/app/interface';



@Component({
  selector: 'app-show-delete-driver',
  templateUrl: './show-delete-driver.component.html',
  styleUrls: ['./show-delete-driver.component.css']
})

export class ShowDeleteDriverComponent implements OnInit {

  @Input() public parentData: any;

  constructor(private service: SharedService) { }

  driversList: any = [];
  modalTitle!: string;
  ActivateAddEditDriverComp: boolean = false;
  driver: Driver = new Driver();
  
  ngOnInit(): void {
    this.refreshDriversList();
  }

  refreshDriversList() {
    this.service.getDriversList().subscribe(data => {
      this.driversList = data;
    });
  };

  addClick() {
    this.driver = {
      id: 0,
      name: '',
      phone: '',
      email: '',
      trip: ''
    };
    this.modalTitle = "Add Driver";
    this.ActivateAddEditDriverComp = true;
  }

  editClick(item: any) {
    this.driver = item;
    this.modalTitle = "Edit Driver";
    this.ActivateAddEditDriverComp = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteDriver(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshDriversList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDriverComp = false;
    this.refreshDriversList();
  }

}
