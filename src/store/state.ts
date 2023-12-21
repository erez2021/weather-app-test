import { City } from 'src/models/city.interface';

export interface IAppState {
  selectedCity: City;
  favoriteCities: City[];
  measureSystem: string;
}

export const INITIAL_STATE: IAppState = {
  selectedCity: {
    id: '215854',
    name: 'Tel Aviv',
    currentWeather: {},
  },
  favoriteCities: [],
  measureSystem: 'Celsius',
};
