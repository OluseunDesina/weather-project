import { Component, inject, OnInit, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { WeatherImageComponent } from '../../components/weather-image/weather-image.component';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [DatePipe, RouterLink, WeatherImageComponent],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
})
export class ForecastComponent implements OnInit {
  private weatherService = inject(WeatherService);
  private route = inject(ActivatedRoute);
  backgroundImages: any = {
    Clear: 'backgroundImage: linear-gradient(to right, #f3b07c, #fcd283)',
    Clouds: 'backgroundImage: linear-gradient(to right, #5bc8fb, #80eaff)',
    Snow: 'backgroundImage: linear-gradient(to right, #aff2ff, #fff)',
    Haze: 'backgroundImage: linear-gradient(to right, #57d6d4, #71eeec)',
    Mist: 'backgroundImage: linear-gradient(to right, #57d6d4, #71eeec)',
  };
  data = signal<any>(null); // Signal for weather data
  isLoading = signal<boolean>(false); // Signal for loading state
  notFound = signal<boolean>(false); // Signal for not found state

  city = signal<string>('');

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      if (params.has('city')) {
        this.city.set(params.get('city') || '');
        this.onSearch();
      }
    });
  }

  onSearch() {
    this.isLoading.set(true);
    if (this.city) {
      this.weatherService.getForecastData(this.city()).subscribe({
        next: (data) => {
          this.data.set(data);
          this.isLoading.set(false);
          this.notFound.set(false);
        },
        error: (error) => {
          this.notFound.set(false);
          this.data.set(null);
          this.notFound.set(true);
        },
      });
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}
