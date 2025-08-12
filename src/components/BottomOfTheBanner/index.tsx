import { useSelector } from "react-redux";
import Swiper from "@components/Swiper";
import TodayWeather from "@components/TodayWeather";
import WeatherCardGrid from "@components/WeatherCardsList";
import useResize from "@hooks/useResize";

import { selectHorlyWeather } from "@store/selectors/hourlyWeatherSelector";

import { Wrapper } from "./styled";

const BottomOfTheBanner = () => {
  const { isMobileView } = useResize();
  const weatherElements = useSelector(selectHorlyWeather);

  return (
    <Wrapper>
      <TodayWeather />
      {isMobileView ? (
        <WeatherCardGrid weatherElements={weatherElements} />
      ) : (
        <Swiper weatherElements={weatherElements} />
      )}
    </Wrapper>
  );
};

export default BottomOfTheBanner;
