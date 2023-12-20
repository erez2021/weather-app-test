import { Component, Input, OnInit } from '@angular/core';
import { getDayByDate } from 'src/utils/utils';
import { Store } from '@ngrx/store';

import { Actions } from 'src/store/actions';
import { City } from 'src/models/city.interface';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent implements OnInit {
  @Input() selectedCityForecast?: any[] = [];
  @Input() selectedCity: City = {
    id: '215854',
    name: 'Tel Aviv',
    currentWeather: {},
    isFavorite: false,
  };
  @Input() measureSystem: string = 'Celsius';
  favoriteCities: City[] = [];
  toggledImage: string = 'assets/icons/heart.png';
  mockData = [{}];
  constructor(private store: Store<{ favoriteCities: City[] }>) {
    this.store.subscribe((data: any) => {
      console.log(data.appState.favoriteCities);
      this.favoriteCities = data.appState.favoriteCities;
    });
  }

  ngOnInit(): void {
    console.log(this.selectedCityForecast);
  }
  toggleAddToFavorites() {
    this.toggledImage =
      this.toggledImage === 'assets/icons/heart.png'
        ? 'assets/icons/redheart.png'
        : 'assets/icons/heart.png';
    console.log(this.toggledImage);

    this.selectedCity = {
      ...this.selectedCity,
      isFavorite: !this.selectedCity.isFavorite,
    };
    const audio = new Audio(
      this.selectedCity.isFavorite
        ? 'assets/sounds/sound.mp3'
        : 'assets/sounds/pop.mp3'
    );
    audio.play();
    this.store.dispatch(
      Actions.addCityToFavorites({ city: this.selectedCity })
    );
  }
}
