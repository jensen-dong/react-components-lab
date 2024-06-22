const WeatherData = ({ forecast }) => {
  return (
    <>
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} />
      <p>
        <span className="font-bold">conditions: </span>
        {forecast.conditions}
      </p>
      <p>
        <span className="font-bold">time: </span>
        {forecast.time}
      </p>
    </>
  );
};
export default WeatherData;
