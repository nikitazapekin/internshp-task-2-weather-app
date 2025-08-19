import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import TodayWeatherIcon from "@components/TodayWeatherIcon";
import TodayWeatherText from "@components/TodayWeatherText";
import { ERROR_CONSTANTS } from "@constants";
import WeatherAppError from "@errors/weatherAppError";

import { selectCurrentCity, selectCurrentWeather } from "@store/selectors";

import { Wrapper } from "./styled";

const TodayWeather = () => {
  const { data, error } = useSelector(selectCurrentWeather);
  const { city } = useSelector(selectCurrentCity);
  const { TITLE } = ERROR_CONSTANTS.API_ERRORS;

  if (error) {
    throw new WeatherAppError(TITLE, error);
  }

  if (!data || !data.main) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TodayWeatherIcon />
      <TodayWeatherText text={data.main.temp} city={city || ""} />
    </Wrapper>
  );
};

export default TodayWeather;
