import WeatherData from "./WeatherData";
import weather from "../weather.json";

const WeatherForecast = () => {
  //console.log(weather)
  return (
    <div className="weather border border-gray-300 flex-1 p-2.5 text-center">
        {weather.map((forecast, index) => (
          <WeatherData key={index} forecast={ forecast }/>
        ))}
      </div>
  );
};
export default WeatherForecast;
