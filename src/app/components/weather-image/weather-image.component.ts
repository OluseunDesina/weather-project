import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-image',
  standalone: true,
  imports: [],
  templateUrl: './weather-image.component.html',
  styleUrl: './weather-image.component.scss',
})
export class WeatherImageComponent {
  @Input('weatherImage') weatherImage = '';
  weatherImages: any = {
    Clear: 'assets/sunny.png',
    Clouds: 'assets/cloudy.png',
    Rain: 'assets/rainy.png',
    Snow: 'assets/snowy.png',
    Haze: 'assets/cloudy.png',
    Mist: 'assets/cloudy.png',
  };
}
