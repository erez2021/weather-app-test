import { Injectable } from '@angular/core';
import axios from 'axios';

const API_KEY = 'tEEavAr1t1U5mu4Gbpd9fcXA7YXkidKw';
const BASE_URL = 'http://dataservice.accuweather.com/';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  getCities = async (cityQueryString: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityQueryString}`
      );
      return response.data;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  getCurrentWeather = async (locationKey: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`
      );
      return response.data;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  get5DaysForcast = async (locationKey: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&details=true`
      );
      console.log(response.data.DailyForecasts);

      return response?.data.DailyForecasts;
    } catch (error) {
      console.log('Error: ', error);
    }
  };
}
