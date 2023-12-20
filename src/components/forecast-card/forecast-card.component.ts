import { Component, Input, OnInit } from '@angular/core';
import { getDayByDate } from 'src/utils/utils';
import { Store } from '@ngrx/store';

import { Actions } from 'src/store/actions';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent implements OnInit {
  @Input() selectedCityForecast?: any[] = [];
  @Input() selectedCity: string = 'Tel Aviv';
  @Input() measureSystem: string = 'Celsius';

  mockData = [{}];
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log(this.selectedCityForecast);
  }
  toggleAddToFavorites() {
    this.store.dispatch(
      Actions.addCityToFavorites({ city: this.selectedCity })
    );
  }
}
