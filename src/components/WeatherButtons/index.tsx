import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { TimeOfWeather } from "@constants/weatherConstants";

import {
  fetchHourlyWeatherByCoordsRequest,
  fetchWeeklyWeatherByCoordsRequest,
} from "@store/actions/weather";
import { selectCurrentCoordinats, selectTimeOfWeather } from "@store/selectors";

import { Wrapper } from "./styled";

const WeatherButtons = () => {
  const { weatherButtons } = UI_CONSTANTS;
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector(selectCurrentCoordinats);
  const currentWeatherType = useSelector(selectTimeOfWeather);

  const handleSendRequest = (type: string) => {
    if (type === TimeOfWeather.WEEKLY) {
      dispatch(fetchWeeklyWeatherByCoordsRequest({ latitude, longitude }));
    } else {
      dispatch(fetchHourlyWeatherByCoordsRequest({ latitude, longitude }));
    }
  };

  return (
    <Wrapper>
      {weatherButtons.map(({ id, text, type }) => (
        <Button
          key={id}
          text={text}
          isActive={type === currentWeatherType}
          handler={() => handleSendRequest(type)}
        />
      ))}
    </Wrapper>
  );
};

export default WeatherButtons;
