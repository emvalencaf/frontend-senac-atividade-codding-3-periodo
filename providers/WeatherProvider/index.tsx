'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";
import { IWeatherResponse } from "../../types/response";

type WeatherData = {
    city: string;
    state?: string;
    country: string;
    weatherInfo: IWeatherResponse;
};

type WeatherContextType = {
    weatherData: WeatherData | null;
    setWeatherData: (data: WeatherData) => void;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
            {children}
        </WeatherContext.Provider>
    );
};
