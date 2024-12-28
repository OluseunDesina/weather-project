import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-bg-image',
  standalone: true,
  imports: [NgClass],
  templateUrl: './weather-bg-image.component.html',
  styleUrl: './weather-bg-image.component.scss',
})
export class WeatherBgImageComponent {
  @Input('weatherImage') weatherImage = '';
  @Input('inputClass') inputClass = '';
  backgroundImages: any = {
    Clear: 'backgroundImage: linear-gradient(to right, #f3b07c, #fcd283)',
    Clouds: 'backgroundImage: linear-gradient(to right, #5bc8fb, #80eaff)',
    Snow: 'backgroundImage: linear-gradient(to right, #aff2ff, #fff)',
    Haze: 'backgroundImage: linear-gradient(to right, #57d6d4, #71eeec)',
    Mist: 'backgroundImage: linear-gradient(to right, #57d6d4, #71eeec)',
  };
}
