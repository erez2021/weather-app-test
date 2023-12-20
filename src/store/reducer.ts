import { createReducer, on } from '@ngrx/store';
import { INITIAL_STATE } from './state';
import { Actions } from './actions';

export const appReducer = createReducer(
  INITIAL_STATE,
  on(Actions.setSelectedCity, (lastState, { selectedCity }) => ({
    ...lastState,
    selectedCity,
  })),
  on(Actions.addCityToFavorites, (lastState, { city }) => {
    const isCityAlreadyAdded = lastState.favoriteCities.find(
      (favoriteCity) => favoriteCity.id === city.id
    );
    return {
      ...lastState,
      favoriteCities: isCityAlreadyAdded
        ? lastState.favoriteCities.map((favoriteCity) =>
            favoriteCity.id === city.id
              ? { ...favoriteCity, isFavorite: city.isFavorite }
              : favoriteCity
          )
        : [...lastState.favoriteCities, city],
    };
  }),
  on(Actions.setMeasureSystem, (lastState, { measureSystem }) => ({
    ...lastState,
    measureSystem,
  }))
);
