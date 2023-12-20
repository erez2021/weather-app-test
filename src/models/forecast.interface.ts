interface Day {
  IconPhrase: string;
}
interface TemperatureValue {
  Value: string;
}
interface Temperature {
  Maximum: TemperatureValue;
  Minimum: TemperatureValue;
}
export interface forecast {
  Date: string;
  Day: Day;
  Temperature: Temperature;
}
