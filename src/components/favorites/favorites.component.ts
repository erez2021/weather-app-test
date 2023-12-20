import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { City } from 'src/models/city.interface';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoriteCities: City[] = [];

  constructor(
    private weatherService: WeatherService,
    private store: Store<{ favoriteCities: string[] }>
  ) {
    this.store.subscribe((data: any) => {
      console.log(data.appState.favoriteCities);
      this.favoriteCities = data.appState.favoriteCities;
    });
  }

  async ngOnInit() {
    //consider use promiseAll to get all calls data together ,
    // if not working should get the current weather for each object before
    //  this.selectedCityWeather = await this.weatherService.getCurrentWeather(
    //       '215854'
    //     );
    //     console.log(this.selectedCityWeather);
  }
}
