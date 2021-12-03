import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Service */
import { SharedService } from './shared.service';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
/* Parent component */
import { AppComponent } from './app.component';
/* Panel */
import { PanelComponent } from './panel/panel.component';
import { HeaderComponent } from './panel/header/header.component';
import { SidebarComponent } from './panel/sidebar/sidebar.component';
/* Home details */
import { ShowDeleteStationComponent } from './home/stations/show-delete-station/show-delete-station.component';
import { AddEditStationComponent } from './home/stations/add-edit-station/add-edit-station.component';
import { AddEditFleetComponent } from './home/fleets/add-edit-fleet/add-edit-fleet.component';
import { ShowDeleteFleetComponent } from './home/fleets/show-delete-fleet/show-delete-fleet.component';
import { ShowDeleteDriverComponent } from './home/drivers/show-delete-driver/show-delete-driver.component';
import { AddEditDriverComponent } from './home/drivers/add-edit-driver/add-edit-driver.component';
import { ShowDeletePassengerComponent } from './home/passengers/show-delete-passenger/show-delete-passenger.component';
import { AddEditPassengerComponent } from './home/passengers/add-edit-passenger/add-edit-passenger.component';
import { ShowDeleteTripComponent } from './home/trips/show-delete-trip/show-delete-trip.component';
import { AddEditTripComponent } from './home/trips/add-edit-trip/add-edit-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PanelComponent,
    HeaderComponent,
    SidebarComponent,
    ShowDeleteStationComponent,
    AddEditStationComponent,
    AddEditFleetComponent,
    ShowDeleteFleetComponent,
    ShowDeleteDriverComponent,
    AddEditDriverComponent,
    ShowDeletePassengerComponent,
    AddEditPassengerComponent,
    ShowDeleteTripComponent,
    AddEditTripComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  // The application is going to start running from this component
  bootstrap: [AppComponent]
})

export class AppModule { }
