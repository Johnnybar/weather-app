interface HourWeatherProps {
  weather: string;
  time: string;
  temp: number;
}
interface DayLocationProps {
  name: string;
  day: string;
  exactDate: string;
  hiLoTemp: string;
}
type Optional<T> = T | null;
