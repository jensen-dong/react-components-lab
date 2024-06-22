const WeatherData = ({ forecast }) => {
  return (
    <div className="weather border border-gray-300 flex-1 p-2.5 text-center text-white">
      <h2 className="mt-4">{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} className="mx-auto"/>
      <p className="my-4">
        <span className="font-bold">conditions: </span>
        {forecast.conditions}
      </p>
      <p className="mb-4">
        <span className="font-bold">time: </span>
        {forecast.time}
      </p>
    </div>
  );
};
export default WeatherData;
