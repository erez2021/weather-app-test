export interface IAppState {
  selectedCity: string;
  favoriteCities: string[];
  measureSystem: string;
}

export const INITIAL_STATE: IAppState = {
  selectedCity: 'Tel-aviv',
  favoriteCities: [],
  measureSystem: 'Celsius',
};
