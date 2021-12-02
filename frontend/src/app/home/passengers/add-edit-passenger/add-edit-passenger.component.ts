import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { Commuter } from 'src/app/interface';

@Component({
  selector: 'app-add-edit-passenger',
  templateUrl: './add-edit-passenger.component.html',
  styleUrls: ['./add-edit-passenger.component.css']
})

export class AddEditPassengerComponent implements OnInit {

  @Input() commuter: Commuter = new Commuter();

  constructor(private service: SharedService) {}

  ngOnInit(): void {
  
  }

  // Add a commuter
  addCommuter() {
    let value = {id: this.commuter.id, name: this.commuter.name, email: this.commuter.email, dob: this.commuter.dob, gender: this.commuter.gender, subscription: this.commuter.subscription};
    this.service.addCommuter(value).subscribe(res => {
      alert(res.toString());
    })
  }

  // Update a commuter
  updateCommuter(){
    let value = {id: this.commuter.id, name: this.commuter.name, email: this.commuter.email, dob: this.commuter.dob, gender: this.commuter.gender};
    this.service.updateCommuter(value).subscribe(res => {
      alert(res.toString());
    });
  }

}
