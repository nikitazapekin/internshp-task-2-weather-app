import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import WeatherCard from "@components/WeatherCard";
import { TimeOfWeather } from "@constants/weatherConstants";
import { transformWeatherData } from "@utils/helpers/transformWeatherResponse/transformWeatherResponse";

import { selectWeather } from "@store/selectors";

import { Wrapper } from "./styled";
import type { WeatherCardsListProps } from "./types";

const WeatherCardGrid = ({ weatherElements }: WeatherCardsListProps) => {
  const { timeOfWeather } = useSelector(selectWeather);

  if (!weatherElements || !weatherElements.list) return <Spinner />;

  const weatherArray =
    timeOfWeather && timeOfWeather === TimeOfWeather.WEEKLY
      ? transformWeatherData(weatherElements)
      : weatherElements.list;

  return (
    <Wrapper>
      {weatherArray.map((weatherElement) => (
        <WeatherCard key={weatherElement.dt_txt} weatherElement={weatherElement} />
      ))}
    </Wrapper>
  );
};

export default WeatherCardGrid;
