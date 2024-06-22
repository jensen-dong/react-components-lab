import WeatherForecast from "./components/WeatherForecast";

const App = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-3xl p-4">Local Weather</h1>
        <section className="flex justify-center">
          <WeatherForecast />
        </section>
      </div>
    </div>
  );
};
export default App;
