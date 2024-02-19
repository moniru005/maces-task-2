import { useEffect, useState } from "react";

const api = {
  key: import.meta.env.VITE_WEATHER_KEY,
  base: "https://dataservice.accuweather.com/locations/v1/",
};
const useWeatherApi = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${api.base}cities/search?apikey=${api.key}&q=chittagong`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setWeather(result[0]);
      });
  }, []);
  return weather;
};

export default useWeatherApi;
