import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions } from 'src/store/actions';
import { WeatherService } from 'src/services/weather.service';

interface locationObject {
  country: string;
  city: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  cityFormControl = new FormControl('', Validators.required);
  selectedCity: string = 'Tel-aviv';
  selectedCityForcast: any = [];
  selectedCityWeather: string = '';
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
  filteredLocations: locationObject[] = [];

  constructor(
    private weatherService: WeatherService,
    private store: Store<{ selectedCity: string }>
  ) {}

  async ngOnInit() {
    // this.filteredLocations = this.cityFormControl.valueChanges.pipe(
    //   startWith(''),
    //   map((val: any) => this.filterArray(val))
    // );
    // this.selectedCityForcast = await this.weatherService.get5DaysForcast('215854');
    // this.selectedCityWeather = await this.weatherService.getCurrentWeather(
    //   '215854'
    // );
    // console.log(this.selectedCityWeather);
  }

  // consider moving to utils
  // filterArray(val: string): string[] {
  //   return this.cities.filter(
  //     (city: string) => city.toLowerCase().indexOf(val.toLowerCase()) === 0
  //   );
  // }

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
