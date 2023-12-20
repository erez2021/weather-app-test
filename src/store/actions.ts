import { createAction, props } from '@ngrx/store';
import { City } from 'src/models/city.interface';

const setSelectedCity = createAction(
  'SET_SELECTED_CITY',
  props<{ selectedCity: City }>()
);
const addCityToFavorites = createAction(
  'ADD_CITY_TO_FAVORITES',
  props<{ city: City }>()
);
const setMeasureSystem = createAction(
  'SET_MEASURE_SYSTEM',
  props<{ measureSystem: string }>()
);

export const Actions = {
  setSelectedCity,
  addCityToFavorites,
  setMeasureSystem,
};
