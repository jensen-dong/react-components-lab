import WeatherForecast from "./components/WeatherForecast";

const App = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <h1 className="text-white text-center text-3xl p-4">Local Weather</h1>
      <section className="flex justify-center">
        <WeatherForecast />
      </section>
    </div>
  );
};
export default App;
