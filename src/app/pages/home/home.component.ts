import { Component, inject, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WeatherImageComponent } from '../../components/weather-image/weather-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    DatePipe,
    RouterLink,
    WeatherImageComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private weatherService = inject(WeatherService);
  city = new FormControl('', [Validators.required]);
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

  onSearch() {
    if (this.city.invalid) {
      this.city.markAsTouched();
      this.city.markAsDirty();
      return;
    }
    this.isLoading.set(true);
    if (this.city.value) {
      this.weatherService.getWeatherData(this.city.value).subscribe({
        next: (data) => {
          this.data.set(data);
          this.isLoading.set(false);
          this.notFound.set(false);
        },
        error: (error) => {
          this.isLoading.set(false);
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
