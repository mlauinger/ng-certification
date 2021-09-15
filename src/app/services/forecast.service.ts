import { Injectable } from '@angular/core';
import { OpenWeatherMapApiService } from "./open-weather-map-api.service";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForecastService{

  constructor(private api: OpenWeatherMapApiService) {
  }

  getLocationForecast(location: string): Observable<any>{
    const forecast$ = new Subject<any>();
    this.api.getWeatherData(location).subscribe(locationData => {
      this.api.getLocationForeCast(locationData.coord).subscribe(forecast => {
        forecast$.next({forecast: forecast.daily.slice(0, 5), location: locationData.location, name: locationData.name});
        forecast$.complete();
      })
    })
    return forecast$
  }

}
