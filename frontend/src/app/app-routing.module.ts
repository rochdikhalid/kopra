import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Home */
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
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
]

