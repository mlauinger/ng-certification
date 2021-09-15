import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Coordinates, Forecast, LocationWeather } from "../models/location-weather";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapApiService {

  static readonly API_KEY = '5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private http: HttpClient) {
  }

  getWeatherData(location: string) {
    return this.http.get<LocationWeather>(`http://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=${OpenWeatherMapApiService.API_KEY}&units=metric`).pipe(map(result => ({
      ...result,
      location
    })));
  }

  getLocationForeCast(coord: Coordinates) {
    return this.http.get<Forecast>(`http://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${OpenWeatherMapApiService.API_KEY}&units=metric&exclude=hourly,current,minutely,alerts`)
  }
}
