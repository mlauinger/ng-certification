import { Component, OnInit } from '@angular/core';
import { LocationService } from "../services/location.service";
import { Subject } from "rxjs";
import { LocationWeather } from "../models/location-weather";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newLocation: string = '';
  locations$: Subject<LocationWeather[]>;

  constructor(private locationService: LocationService) {
    this.locations$ = this.locationService.locations$;
  }

  ngOnInit(): void {}

  submitLocation() {
    this.locationService.add(this.newLocation);
    this.newLocation = '';
  }
}
