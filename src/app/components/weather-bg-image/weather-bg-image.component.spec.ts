import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBgImageComponent } from './weather-bg-image.component';

describe('WeatherBgImageComponent', () => {
  let component: WeatherBgImageComponent;
  let fixture: ComponentFixture<WeatherBgImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherBgImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherBgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
