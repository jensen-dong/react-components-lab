const WeatherData = ({ forecast }) => {
  return (
    <div className="weather border border-gray-300 flex-1 p-2.5 text-center text-white">
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} className="mx-auto"/>
      <p>
        <span className="font-bold">conditions: </span>
        {forecast.conditions}
      </p>
      <p>
        <span className="font-bold">time: </span>
        {forecast.time}
      </p>
    </div>
  );
};
export default WeatherData;
