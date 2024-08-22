// components
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../components/Header";
import WeatherContainer from "../../components/WeatherContainer";
import WeatherSearch from "../../components/WeatherSearch";
import { WeatherProvider } from "../../providers/WeatherProvider";


const HomeTemplate = () => {
    return (
        <WeatherProvider>
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-8 md:py-12 lg:py-16">
                <Header />
                <WeatherSearch />
                <WeatherContainer />
            </div>
        </WeatherProvider>);
}

export default HomeTemplate;