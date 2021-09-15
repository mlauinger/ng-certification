import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ForecastService } from "../services/forecast.service";
import { LocationForecast } from '../models/location-weather';

@Component({
  selector: 'app-detailed-forecast',
  templateUrl: './detailed-forecast.component.html',
  styleUrls: ['./detailed-forecast.component.scss']
})
export class DetailedForecastComponent implements OnInit {
  forecastData: LocationForecast;

  constructor(private route: ActivatedRoute, private router: Router, private forecastService: ForecastService) {
    this.route.params.subscribe(routeParams => {
      if(routeParams.zipcode) {
        this.forecastService.getLocationForecast(routeParams.zipcode).subscribe(forecast => {
          this.forecastData = forecast;
        }, error =>{
          console.log(error);
          this.router.navigate(['/'])
        })
      } else {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/'])
  }
}
