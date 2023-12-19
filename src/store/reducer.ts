import { createReducer, on } from '@ngrx/store';
import { INITIAL_STATE } from './state';
import { Actions } from './actions';

export const appReducer = createReducer(
  INITIAL_STATE,
  on(Actions.setSelectedCity, (lastState, { selectedCity }) => ({
    ...lastState,
    selectedCity,
  })),
  on(Actions.addCityToFavorites, (lastState, { city }) => ({
    ...lastState,
    favoriteCities: [...lastState.favoriteCities, city],
  }))
);
