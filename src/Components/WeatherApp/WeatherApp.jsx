import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const api = {
  key: "import.meta.env.VITE_WEATHER_KEY",
  base: "https://dataservice.accuweather.com/locations/v1/",
};
const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${api.base}cities/search?apikey=${api.key}&q=chittagong`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result[0]);
      });
  }, []);

  const handleSearch = () => {
    fetch(`${api.base}cities/search?apikey=${api.key}&q=${search}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result[0]);
      });
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-4">
        <div className="flex flex-row items-center pb-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search City/Country.."
            className="p-4 rounded-l-lg border border-gray-900 uppercase"
          />
          <button
            onClick={handleSearch}
            className="rounded-r-lg rounded-l-none bg-slate-300 p-[17px] hover:bg-slate-200"
          >
            Search
          </button>
        </div>
        <div className="mb-6 flex flex-col items-center space-y-3">
          <h2 className="py-4 font-medium text-stale-900 text-center">
            <span className="text-4xl font-bold">
              {weather.EnglishName}
            </span>
          </h2>
          
          
        </div>
      </div>

      {
        weather&& (
          <WeatherCard weather={weather}/>
           )
      }
      

    </div>
  );
};

export default WeatherApp;
