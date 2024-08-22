"use client";

// hooks
import { useContext } from "react";

// providers
import { WeatherContext } from "../../providers/WeatherProvider";

const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeather must be used within a WeatherProvider");
    }
    return context;
};

export default useWeather;