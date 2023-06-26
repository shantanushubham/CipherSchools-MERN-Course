import { convertToFahrenheit, getWeatherTypeFromCode } from "../weatherUtil";

const WeatherSummary = ({
  currentWeather: { temperature, weatherCode },
  isCelsius,
}) => {
  return (
    <div>
      <h1>
        {isCelsius
          ? `${temperature} ºC`
          : `${convertToFahrenheit(temperature)} ºF`}{" "}
        | {getWeatherTypeFromCode(weatherCode)}{" "}
      </h1>
    </div>
  );
};

export default WeatherSummary;
