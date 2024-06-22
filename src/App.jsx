import WeatherForecast from "./components/WeatherForecast";



const App = () => {
  return (
    <>
      <h1>Local Weather</h1>
      <section className="flex">
        <WeatherForecast />
      </section>
    </>
  );
};
export default App;
