import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  private http = inject(HttpClient);
  private apiKey = environment.apiKey;

  getWeatherData(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${this.apiKey}`
    );
  }
  getForecastData(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Metric&cnt=5&appid=${this.apiKey}`
    );
  }
}
