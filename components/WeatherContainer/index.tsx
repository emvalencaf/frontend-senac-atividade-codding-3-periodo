"use client";

// icons
import { FaWater, FaWind } from "react-icons/fa";
import { FaArrowsDownToLine, FaDroplet, FaPerson, FaTemperatureArrowDown, FaTemperatureArrowUp, FaTemperatureHalf, FaTreeCity } from "react-icons/fa6";

// components
import WeatherIndicator from "../WeatherIndicator";
import { useWeather } from "../../providers/WeatherProvider";

const WeatherContainer = () => {
    const { weatherData } = useWeather();

    return (
        <div className="p-4 md:p-8 lg:p-12 bg-gradient-to-b from-blue-100 to-blue-300 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="border-l-4 border-blue-500 rounded-lg bg-white p-4 shadow-md flex-1">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Condições Atmosféricas</h2>
                    <div className="flex flex-wrap gap-4">
                        <WeatherIndicator id="wind" Icon={FaWind}>
                            {weatherData?.weatherInfo.wind.speed} m/s {weatherData?.weatherInfo.wind.deg}°
                        </WeatherIndicator>
                        <WeatherIndicator id="umidity" Icon={FaDroplet}>
                            {weatherData?.weatherInfo.main.humidity}%
                        </WeatherIndicator>
                        <WeatherIndicator id="seaLevel" Icon={FaWater}>
                            {weatherData?.weatherInfo.main.sea_level} hPa
                        </WeatherIndicator>
                        <WeatherIndicator id="groundLevel" Icon={FaTreeCity}>
                            {weatherData?.weatherInfo.main.grnd_level} hPa
                        </WeatherIndicator>
                        <WeatherIndicator id="pressure" Icon={FaArrowsDownToLine}>
                            {weatherData?.weatherInfo.main.pressure} hPa
                        </WeatherIndicator>
                    </div>
                </div>
                <div className="border-l-4 border-red-500 rounded-lg bg-white p-4 shadow-md flex-1">
                    <h2 className="text-xl font-semibold mb-4 text-red-700">Temperatura</h2>
                    <div className="flex flex-wrap gap-4">
                        <WeatherIndicator id="feelTemperature" Icon={FaPerson}>
                            {weatherData?.weatherInfo.main.feels_like}°C
                        </WeatherIndicator>
                        <WeatherIndicator id="maximumTemperature" Icon={FaTemperatureArrowUp}>
                            {weatherData?.weatherInfo.main.temp_max}°C
                        </WeatherIndicator>
                        <WeatherIndicator id="temperature" Icon={FaTemperatureHalf}>
                            {weatherData?.weatherInfo.main.temp}°C
                        </WeatherIndicator>
                        <WeatherIndicator id="minimumTemperature" Icon={FaTemperatureArrowDown}>
                            {weatherData?.weatherInfo.main.temp_min}°C
                        </WeatherIndicator>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-medium capitalize text-gray-700 mb-2">
                    {weatherData?.weatherInfo.weather.description}
                </h3>
                {weatherData?.weatherInfo.weather.icon && (
                    <img
                        className="w-20 h-20"
                        src={`https://openweathermap.org/img/wn/${weatherData?.weatherInfo.weather.icon}@2x.png`}
                        alt={`imagem do ${weatherData?.weatherInfo.weather.main}`}
                    />
                )}
            </div>
        </div>
    );
};

export default WeatherContainer;
