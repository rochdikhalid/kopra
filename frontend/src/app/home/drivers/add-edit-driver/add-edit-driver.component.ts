import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Driver } from 'src/app/interface';



@Component({
  selector: 'app-add-edit-driver',
  templateUrl: './add-edit-driver.component.html',
  styleUrls: ['./add-edit-driver.component.css']
})

export class AddEditDriverComponent implements OnInit {

  @Input() driver: Driver = new Driver();

  trips: any = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    
    this.loadtrips();
    
  }

  // Load trips
  loadtrips() {
    this.service.getTripsList().subscribe((data: any) => {
      this.trips = data;
    })
  }

  // Add a driver
  addDriver() {
    let value = {id: this.driver.id, name: this.driver.name, phone: this.driver.phone, email: this.driver.email, trip: this.driver.trip};
    this.service.addDriver(value).subscribe(res => {
      alert(res.toString());
    })
  }

  // Update a driver
  updateDriver(){
    let value = {id: this.driver.id, name: this.driver.name, phone: this.driver.phone, email: this.driver.email, trip: this.driver.trip};
    this.service.updateDriver(value).subscribe(res => {
      alert(res.toString());
    });
  }
  
}
