import TodayWeatherIcon from "@components/TodayWeatherIcon";
import TodayWeatherText from "@components/TodayWeatherText";

import { Wrapper } from "./styled";

const TodayWeather = () => {
  return (
    <Wrapper>
      <TodayWeatherIcon />
      <TodayWeatherText />
    </Wrapper>
  );
};

export default TodayWeather;
