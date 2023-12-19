export interface IAppState {
  selectedCity: string;
  favoriteCities: string[];
}

export const INITIAL_STATE: IAppState = {
  selectedCity: 'Tel-aviv',
  favoriteCities: [],
};
