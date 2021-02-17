import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './weather.component';

@Injectable({
  providedIn: 'root',
})
// 36f8995788d170efb4c9934423619753
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(zipcode: string) {
    return this.http.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=36f8995788d170efb4c9934423619753`
    );
  }
}
