import { Component, Input } from '@angular/core';
import {
  getDayByDate,
  getImageByPhrase,
  calculateTemperature,
} from 'src/utils/utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() dayForecast: any;
  @Input() measureSystem: string = 'Celsius';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() cityDetails: any;

  getDay(dateString: string) {
    return getDayByDate(dateString);
  }
  getImage(phrase: string) {
    const weather = getImageByPhrase(phrase);
    return `assets/icons/${weather}.png`;
  }
  convertTemperature(temperature: number) {
    return calculateTemperature(temperature, this.measureSystem);
  }
  get displayMeasureSystem() {
    return `assets/icons/${this.measureSystem}.png`;
  }
}
