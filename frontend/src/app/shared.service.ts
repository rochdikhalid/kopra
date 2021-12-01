import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SharedService {

  readonly APIUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}
  
  /* STATIONS */

  // GET ALL STATIONS NAMES
  getStationsList(): Observable<any> {
    return this.http.get(`${this.APIUrl}/stations`)
  };

  // ADD STATION
  addStation(station: Object): Observable<object> {
    return this.http.post(`${this.APIUrl}/stations/`, station)
  };

  // UPDATE STATION
  updateStation(value: any): Observable<object>{
    return this.http.put(`${this.APIUrl}/stations/`, value);
  }

  // DELETE STATION
  deleteStation(id: number): Observable<any> {
    return this.http.delete(`${this.APIUrl}/stations/${id}`)
  };

  // GET STATIONS' NAMES
  getStationsNames(): Observable<any> {
    return this.http.get(`${this.APIUrl}/stations`);
  }

  /* DRIVERS */

  // GET ALL DRIVERS NAMES
  getDriversList(): Observable<any> {
    return this.http.get(`${this.APIUrl}/drivers`)
  };

  // ADD DRIVER
  addDriver(driver: Object): Observable<object> {
    return this.http.post(`${this.APIUrl}/drivers/`, driver)
  };

  // UPDATE DRIVER
  updateDriver(value: any): Observable<object>{
    return this.http.put(`${this.APIUrl}/drivers/`, value);
  }

  // DELETE DRIVER
  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`${this.APIUrl}/drivers/${id}`)
  };

  /* FLEETS */

  // GET ALL FLEETS NAMES
  getFleetsList(): Observable<any> {
    return this.http.get(`${this.APIUrl}/fleets`)
  };

  // ADD FLEET
  addFleet(fleet: Object): Observable<object> {
    return this.http.post(`${this.APIUrl}/fleets/`, fleet)
  };

  // UPDATE FLEET
  updateFleet(value: any): Observable<object>{
    return this.http.put(`${this.APIUrl}/fleets/`, value);
  }

  // DELETE FLEET
  deleteFleet(id: number): Observable<any> {
    return this.http.delete(`${this.APIUrl}/fleets/${id}`)
  };
  
  /* PASSENGERS */

  // GET ALL COMMUTERS 
  getCommutersList(): Observable<any> {
    return this.http.get(`${this.APIUrl}/passengers`)
  };

  // ADD COMMUTER
  addCommuter(commuter: Object): Observable<object> {
    return this.http.post(`${this.APIUrl}/passengers/`, commuter)
  };

  // UPDATE COMMUTER
  updateCommuter(value: any): Observable<object>{
    return this.http.put(`${this.APIUrl}/passengers/`, value);
  }

  // DELETE COMMUTER
  deleteCommuter(id: number): Observable<any> {
    return this.http.delete(`${this.APIUrl}/passengers/${id}`)
  };

  /* TRIPS */

  // GET ALL TRIP NAMES
  getTripsList(): Observable<any> {
    return this.http.get(`${this.APIUrl}/trips`)
  };

  // ADD TRIP
  addTrip(trip: Object): Observable<object> {
    return this.http.post(`${this.APIUrl}/trips/`, trip)
  };

  // UPDATE TRIP
  updateTrip(value: any): Observable<object>{
    return this.http.put(`${this.APIUrl}/trips/`, value);
  }

  // DELETE TRIP
  deleteTrip(id: number): Observable<any> {
    return this.http.delete(`${this.APIUrl}/trips/${id}`)
  };

}
