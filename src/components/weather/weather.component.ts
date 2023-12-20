import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Actions } from 'src/store/actions';
import { WeatherService } from 'src/services/weather.service';
import { forecast } from 'src/models/forecast.interface';
import { location } from 'src/models/location.interface';
// import { generateRandomId } from 'src/utils/utils';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  cityFormControl = new FormControl('', Validators.required);
  selectedCity: string = 'Tel Aviv';
  selectedCityForecast: any = [];
  selectedCityWeather: string = '';
  measureSystem: string = 'Celcius';
  placeholder: string = 'City name';

  cities: any = [
    {
      Country: { ID: 'BR', LocalizedName: 'Brazil' },
      LocalizedName: 'Jerusalem',
    },
    {
      Country: { ID: 'US', LocalizedName: 'USA' },
      LocalizedName: 'Jerusalem',
    },
    {
      Country: { ID: 'GB', LocalizedName: 'ENGLAND' },
      LocalizedName: 'London',
    },
    {
      Country: { ID: 'US', LocalizedName: 'USA' },
      LocalizedName: 'New York',
    },
    {
      Country: { ID: 'IL', LocalizedName: 'Israel' },
      LocalizedName: 'Tel Aviv',
    },
    {
      Country: { ID: 'IL', LocalizedName: 'Israel' },
      LocalizedName: 'Jerusalem',
    },
    {
      Country: { ID: 'FR', LocalizedName: 'France' },
      LocalizedName: 'Paris',
    },
  ];
  filteredLocations: location[] = [];

  constructor(
    private weatherService: WeatherService,

    private store: Store<{ selectedCity: string; measureSystem: string }>
  ) {
    this.store.subscribe((data: any) => {
      console.log(data.appState.measureSystem);
      this.measureSystem = data.appState.measureSystem;
    });
  }

  async ngOnInit() {
    const selectedCityForecast = await this.weatherService.get5DaysForecast(
      '215854'
    );
    this.selectedCityForecast = selectedCityForecast.map((item: forecast) => {
      return {
        locationName: this.selectedCity,
        date: item.Date,
        phrase: item.Day.IconPhrase,
        maxTemperature: item.Temperature.Maximum.Value,
        minTemperature: item.Temperature.Minimum.Value,
      };
    });
    console.log(this.selectedCityForecast);
    this.selectedCityWeather = await this.weatherService.getCurrentWeather(
      '215854'
    );
    console.log(this.selectedCityWeather);
  }

  onCitySelected(city: string): void {
    this.selectedCity = city;
    this.store.dispatch(Actions.setSelectedCity({ selectedCity: city }));
    this.filteredLocations = [];
  }

  onAddCityToFavorites(city: string): void {
    this.store.dispatch(Actions.addCityToFavorites({ city }));
  }

  async searchCity(e: any) {
    console.log(e.target.value);
    const searchWord = e.target.value;
    if (searchWord.length >= 2) {
      const result = await this.weatherService.getCities(searchWord);
      this.filteredLocations = result.reduce((acc: any[], item: any) => {
        acc.push({
          country: item.Country.LocalizedName,
          city: item.LocalizedName,
        });
        return acc;
      }, []);
    } else {
      this.filteredLocations = [];
    }
  }

  removePlaceholder() {
    this.placeholder = '';
  }
}
