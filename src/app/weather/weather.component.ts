import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather-service.service';

interface weatherObject {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Array<weatherObject>;
  wind: { speed: number; deg: number };
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  zipcode = '32746';
  icon = '';
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather('32746').subscribe(
      (data: WeatherData) => {
        this.weatherData = data;
        this.icon =
          'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateZipcode(updatedZipcode: string) {
    this.weatherService.getWeather(updatedZipcode).subscribe(
      (data: WeatherData) => {
        this.weatherData = data;
        this.icon =
          'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
