"use client";

// toast
import toast from "react-hot-toast";

// hooks
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// custom hooks
import useWeather from "../../hooks/useWeather";

// icons
import { FaSearchLocation, FaCity, FaMap, FaGlobeAmericas } from "react-icons/fa";

export type IFormInputs = {
    city: string;
    state?: string;
    country: string;
};

const WeatherSearch: React.FC = () => {
    const { handleSubmit, register, watch } = useForm<IFormInputs>();
    const { setWeatherData } = useWeather();

    const [activeField, setActiveField] = useState<string | null>(null);

    // Watch the values of the form inputs
    const cityValue = watch("city");
    const stateValue = watch("state");
    const countryValue = watch("country");

    const allFieldsFilled = cityValue && countryValue;

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        if (!cityValue)
            return toast.error("O campo Cidade é obrigatório");
        if (!countryValue)
            return toast.error("O campo País é obrigatório");
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/weather?city=${data.city}&state=${data.state || ''}&country=${data.country}`);

            if (!res.ok) {
                throw new Error("Erro ao buscar dados do clima");
            }

            setWeatherData({
                city: data.city,
                state: data.state,
                country: data.country,
                weatherInfo: await res.json(),
            });
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
            toast.error(errorMessage);
        }
    };

    return (
        <form
            className="relative flex items-center bg-gray-100 border border-gray-300 rounded-md max-w-screen-lg mx-auto w-full"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex w-4/5">

                <div className="relative flex-1">
                    <input
                        id="city"
                        type="text"
                        className={`absolute inset-0 w-full p-2 border border-gray-300 rounded outline-none transition-transform duration-300 transform ${activeField === 'city' ? 'opacity-100 translate-x-0 bg-white' : 'opacity-0 translate-x-full'} ${cityValue ? 'bg-blue-100' : 'bg-white'}`}
                        {...register("city", { required: false })}
                        placeholder="Cidade"
                    />
                    <label
                        htmlFor="city"
                        className={`flex items-center justify-between p-3 cursor-pointer text-gray-600 ${ !cityValue ? 'bg-blue-500':'bg-green-500'} rounded-l-md transition-transform duration-300 transform ${activeField === 'city' ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}`}
                        onClick={() => setActiveField(activeField === 'city' ? null : 'city')}
                    >
                        <FaCity className="text-white" />
                        <span className="hidden md:inline-block ml-2">Cidade</span>
                    </label>
                </div>

                <div className="relative flex-1">
                    <input
                        id="state"
                        type="text"
                        className={`absolute inset-0 w-full p-2 border border-gray-300 rounded outline-none transition-transform duration-300 transform ${activeField === 'state' ? 'opacity-100 translate-x-0 bg-white' : 'opacity-0 translate-x-full'} ${stateValue ? 'bg-blue-100' : 'bg-white'}`}
                        {...register("state", { required: false })}
                        placeholder="Estado"
                    />
                    <label
                        htmlFor="state"
                        className={`flex items-center justify-between p-3 cursor-pointer text-gray-600 ${!stateValue ? 'bg-blue-500':'bg-green-500'} transition-transform duration-300 transform ${activeField === 'state' ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}`}
                        onClick={() => setActiveField(activeField === 'state' ? null : 'state')}
                    >
                        <FaMap className="text-white" />
                        <span className="hidden md:inline-block ml-2">Estado</span>
                    </label>
                </div>

                <div className="relative flex-1">
                    <input
                        id="country"
                        type="text"
                        className={`absolute inset-0 w-full p-2 border border-gray-300 rounded outline-none transition-transform duration-300 transform ${activeField === 'country' ? 'opacity-100 translate-x-0 bg-white' : 'opacity-0 translate-x-full'} ${countryValue ? 'bg-blue-100' : 'bg-white'}`}
                        {...register("country", { required: false })}
                        placeholder="País"
                    />
                    <label
                        htmlFor="country"
                        className={`flex items-center justify-between p-3 cursor-pointer text-gray-600 ${ !countryValue ? 'bg-blue-500':'bg-green-500'} transition-transform duration-300 transform ${activeField === 'country' ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}`}
                        onClick={() => setActiveField(activeField === 'country' ? null : 'country')}
                    >
                        <FaGlobeAmericas className="text-white" />
                        <span className="hidden md:inline-block ml-2">País</span>
                    </label>
                </div>
            </div>

            <button
                type="submit"
                className={`absolute right-0 top-0 bottom-0 px-4 flex items-center justify-center rounded-r-md  w-1/5 ${allFieldsFilled ? 'bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 ' : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 '}`}
            >
                <FaSearchLocation className="inline-block mr-2 text-white" />
                <span className="hidden md:inline-block">Buscar</span>
            </button>
        </form>
    );
};

export default WeatherSearch;
