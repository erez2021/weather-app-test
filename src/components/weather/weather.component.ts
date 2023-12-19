import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions } from 'src/store/actions';
import { WeatherService } from 'src/services/weather.service';

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
  cities: string[] = [
    'Tel-aviv',
    'Tel-sheva',
    'London',
    'New york',
    'Prague',
    'Petah-tikva',
  ];
  filteredCities: Observable<string[]> | undefined;

  constructor(
    private weatherService: WeatherService,
    private store: Store<{ selectedCity: string }>
  ) {}

  async ngOnInit() {
    this.filteredCities = this.cityFormControl.valueChanges.pipe(
      startWith(''),
      map((val: any) => this.filterArray(val))
    );
    // this.selectedCityForcast = await this.weatherService.get5DaysForcast('215854');

    // this.selectedCityWeather = await this.weatherService.getCurrentWeather(
    //   '215854'
    // );
    // console.log(this.selectedCityWeather);
  }

  // consider moving to utils
  filterArray(val: string): string[] {
    return this.cities.filter(
      (city: string) => city.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  onCitySelected(city: string): void {
    this.selectedCity = city;
    this.store.dispatch(Actions.setSelectedCity({ selectedCity: city }));
  }

  onAddCityToFavorites(city: string): void {
    this.store.dispatch(Actions.addCityToFavorites({ city }));
  }
}
