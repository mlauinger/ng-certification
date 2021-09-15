import { Component, Input, OnInit } from '@angular/core';
import { LocationWeather } from "../models/location-weather";
import { LocationService } from "../services/location.service";

@Component({
  selector: 'app-location-forecast',
  templateUrl: './location-forecast.component.html',
  styleUrls: ['./location-forecast.component.scss']
})
export class LocationForecastComponent implements OnInit {

  @Input() location: LocationWeather;
  imageSrc: string;

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    switch (this.location.weather[0]?.main?.toLowerCase()) {
      case 'clear':
        this.imageSrc = 'https://www.angulartraining.com/images/weather/sun.png'
        break;
      case 'clouds':
        this.imageSrc = 'https://www.angulartraining.com/images/weather/clouds.png'
        break;
      case 'rain':
        this.imageSrc = 'https://www.angulartraining.com/images/weather/rain.png'
        break;
      case 'snow':
        this.imageSrc = 'https://www.angulartraining.com/images/weather/snow.png'
        break;
      default:
        this.imageSrc = 'https://www.angulartraining.com/images/weather/sun.png'
    }
  }

  close() {
    this.locationService.remove(this.location.location);
  }
}
