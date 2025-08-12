import { useSelector } from "react-redux";
import Spinner from "@components/Spinner";
import TodayWeatherIcon from "@components/TodayWeatherIcon";
import TodayWeatherText from "@components/TodayWeatherText";

import { selectCurrentWeather } from "@store/selectors";

import { Wrapper } from "./styled";

const TodayWeather = () => {
  const currentWeather = useSelector(selectCurrentWeather);

  if (!currentWeather || !currentWeather.main) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TodayWeatherIcon />
      <TodayWeatherText text={currentWeather.main.temp} />
    </Wrapper>
  );
};

export default TodayWeather;
