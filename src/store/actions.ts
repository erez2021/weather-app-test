import { createAction, props } from '@ngrx/store';

const setSelectedCity = createAction(
  'SET_SELECTED_CITY',
  props<{ selectedCity: string }>()
);
const addCityToFavorites = createAction(
  'ADD_CITY_TO_FAVORITES',
  props<{ city: string }>()
);

export const Actions = {
  setSelectedCity,
  addCityToFavorites,
};
