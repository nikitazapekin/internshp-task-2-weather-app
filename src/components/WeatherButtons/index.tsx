import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@components/Button";
import { ERROR_CONSTANTS } from "@constants";
import { UI_CONSTANTS } from "@constants/UI";
import { TimeOfWeather } from "@constants/weatherConstants";
import WeatherAppError from "@errors/weatherAppError";

import {
  fetchHourlyWeatherByCoordsRequest,
  fetchWeeklyWeatherByCoordsRequest,
} from "@store/actions/weather";
import { selectCitiesSuggestions, selectCurrentCoordinats, selectWeather } from "@store/selectors";

import { Wrapper } from "./styled";

const WeatherButtons = () => {
  const { weatherButtons } = UI_CONSTANTS;
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector(selectCurrentCoordinats);
  const { timeOfWeather, error } = useSelector(selectWeather);
  const { isElasticActive, coordinats } = useSelector(selectCitiesSuggestions);
  const { TITLE } = ERROR_CONSTANTS.API_ERRORS;

  if (error) {
    throw new WeatherAppError(TITLE, error);
  }

  const handleSendRequest = (type: string): void => {
    const coords =
      isElasticActive && coordinats
        ? {
            latitude: coordinats.latitude,
            longitude: coordinats.longitude,
          }
        : { latitude, longitude };

    if (type === TimeOfWeather.WEEKLY) {
      dispatch(fetchWeeklyWeatherByCoordsRequest(coords));
    } else {
      dispatch(fetchHourlyWeatherByCoordsRequest(coords));
    }
  };

  return (
    <Wrapper>
      {weatherButtons.map(({ id, text, type }) => (
        <Button
          key={id}
          text={text}
          isActive={type === timeOfWeather}
          handler={() => handleSendRequest(type)}
        />
      ))}
    </Wrapper>
  );
};

export default WeatherButtons;
