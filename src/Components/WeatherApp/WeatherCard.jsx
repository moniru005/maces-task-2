import axios from "axios";
import { useEffect, useState } from "react";
import { ClapSpinner } from "react-spinners-kit";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

const WeatherCard = ({ weather }) => {
  console.log(weather);

  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const api = {
    key: import.meta.env.VITE_WEATHER_KEY,
    base: "https://dataservice.accuweather.com/currentconditions/v1/",
  };

  useEffect(() => {
    setData();
    setLoading(true);
    axios.get(`${api.base}${weather.Key}?apikey=${api.key}`).then((res) => {
      setData(res.data[0]);
      setLoading(false);
    });
  }, [weather.Key, api.base, api.key]);

  console.log(data);

  return (
    <>
      <div
        className={`${
          !data ? "flex" : "hidden"
        } items-center justify-center pb-24`}
      >
        {!data && <ClapSpinner loading={loading} colo="#fff" size={30} />}
      </div>
      <div className="flex px-4 lg:px-16 flex-col gap-4 pb-6 items-center">
        {/* Row-1 */}
        <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-center">
          {/* Wind */}
          <div className=" w-7/12 md:mr-20 mb-10 transition duration-500 ease-in-out transform  rounded-lg hover:scale-105 cursor-pointer border b-gray-400  flex flex-col justify-center items-center text-center p-6 bg-gray-900">
            <div className="text-md font-bold flex flex-col text-white">
              <span className="uppercase">{weather?.EnglishName},&nbsp; {weather?.Country?.EnglishName}</span>
              <span className="font-normal text-white text-sm py-4">
                {data?.LocalObservationDateTime}
              </span>
            </div>
            <div className="w-32 h-32 flex items-center justify-center py-6">
              {data?.IsDayTime === true && <img src={sun} alt="" />}
              {data?.IsDayTime === false && <img src={moon} alt="" />}
            </div>
            <p className="text-white mb-2">{data?.WeatherText}</p>
            <div className="text-3xl font-bold text-white py-6">
              {data?.Temperature.Metric.Value}&deg;
              {data?.Temperature.Metric.Unit}
              <span className="font-normal text-gray-700 mx-1">/</span>
              {data?.Temperature.Imperial.Value}&deg;
              {data?.Temperature.Imperial.Unit}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
