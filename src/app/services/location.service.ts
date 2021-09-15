import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from "rxjs";
import { LocationWeather } from "../models/location-weather";
import { OpenWeatherMapApiService } from "./open-weather-map-api.service";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locations: Set<string>;
  locations$: BehaviorSubject<LocationWeather[]> = new BehaviorSubject<LocationWeather[]>([]);


  constructor(private api: OpenWeatherMapApiService) {
    const storedString = localStorage.getItem('locations');
    const storedLocations = []
    if (storedString !== undefined && storedString !== null) {
      storedLocations.push(...storedString.split(','));
    }
    this.locations = new Set(storedLocations);
    forkJoin(Array.from(this.locations).map(location => this.api.getWeatherData(location))).subscribe(results => {
      this.locations$.next(results)
    })
  }

  add(newLocation: string) {
    this.api.getWeatherData(newLocation).subscribe(data => {
      this.locations.add(newLocation);
      this.locations$.next([...this.locations$.value, data]);
      localStorage.setItem('locations', Array.from(this.locations).join(','))
    }, error => {
      console.log(error)
    })
  }


  remove(location: string) {
    this.locations.delete(location);
    localStorage.setItem('locations', Array.from(this.locations).join(','));
    this.locations$.next(this.locations$.value.filter(weatherData => weatherData.location !== location))
  }
}
