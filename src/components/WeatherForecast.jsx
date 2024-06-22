import WeatherData from "./WeatherData";
import weather from "../weather.json";

const WeatherForecast = () => {
  //console.log(weather)
  return (
    <div className="flex space-x-2">
        {weather.map((forecast, index) => (
          <WeatherData key={index} forecast={ forecast }/>
        ))}
      </div>
  );
};
export default WeatherForecast;
