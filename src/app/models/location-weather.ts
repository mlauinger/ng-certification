export interface LocationWeather {
  location: string,
  name: string;
  coord: Coordinates;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  }
  weather: Weather[]
}

export interface Coordinates {
  lon: number;
  lat: number;
}

interface Weather {
  description: string;
  main: string;
  icon: string;
}

export interface Forecast {
  daily: DailyForecast[]
}

export interface DailyForecast {
  weather: Weather[]
  temp: {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
  }
}
