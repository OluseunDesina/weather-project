import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  private http = inject(HttpClient);

  getWeatherData(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=dae5ad3fe83c4285b49ccea13b342f71`
    );
  }
  getForecastData(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Metric&cnt=5&appid=dae5ad3fe83c4285b49ccea13b342f71`
    );
  }
}
