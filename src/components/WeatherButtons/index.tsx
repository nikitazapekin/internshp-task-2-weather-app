import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";

import {
  fetchHourlyWeatherByCoordsRequest,
  fetchWeeklyWeatherByCoordsRequest,
} from "@store/actions/weatherActions";
import { selectCurrentCoordinats } from "@store/selectors/getCurrentCoordinats";

import { Wrapper } from "./styled";

const WeatherButtons = () => {
  const { weatherButtons } = UI_CONSTANTS;
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector(selectCurrentCoordinats);
  const handleSendRequest = (type: string) => {
    if (type === "weekly") {
      dispatch(fetchWeeklyWeatherByCoordsRequest({ latitude, longitude }));
    } else {
      dispatch(fetchHourlyWeatherByCoordsRequest({ latitude, longitude }));
    }
  };

  return (
    <Wrapper>
      {weatherButtons.map(({ id, text, type }) => (
        <Button key={id} text={text} handler={() => handleSendRequest(type)} />
      ))}
    </Wrapper>
  );
};

export default WeatherButtons;
