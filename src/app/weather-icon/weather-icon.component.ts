import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent {

  @Input() class: string;
  @Input() set condition(value: string) {
    switch (value?.toLowerCase()) {
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

  imageSrc: string;

  constructor() { }
}
