import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ForecastService } from "../services/forecast.service";

@Component({
  selector: 'app-detailed-forecast',
  templateUrl: './detailed-forecast.component.html',
  styleUrls: ['./detailed-forecast.component.scss']
})
export class DetailedForecastComponent implements OnInit {
  forecastData: any;

  constructor(private route: ActivatedRoute, private router: Router, private forecastService: ForecastService) {
    this.route.params.subscribe(routeParams => {
      if(routeParams.zipcode) {
        this.forecastService.getLocationForecast(routeParams.zipcode).subscribe(forecast => {
          console.log(forecast)
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

}
