import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Home */
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { StationsComponent } from './home/stations/stations.component';
import { FleetsComponent } from './home/fleets/fleets.component';
import { DriversComponent } from './home/drivers/drivers.component';
import { PassengersComponent } from './home/passengers/passengers.component';
import { TripsComponent } from './home/trips/trips.component';

const routes: Routes = [
  
  // Default route 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'stations', component: StationsComponent },
      { path: 'fleets', component: FleetsComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'passengers', component: PassengersComponent },
      { path: 'trips', component: TripsComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [
  HomeComponent,
  DashboardComponent,
  StationsComponent,
  FleetsComponent, 
  DriversComponent,
  PassengersComponent, 
  TripsComponent,
]

