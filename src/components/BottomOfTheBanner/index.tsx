import Swiper from "@components/Swiper";
import TodayWeather from "@components/TodayWeather";
import WeatherCardGrid from "@components/WeatherCardsList";
import useResize from "@hooks/useResize";

import { Wrapper } from "./styled";

const BottomOfTheBanner = () => {
  const { isMobileView } = useResize();

  return (
    <Wrapper>
      <TodayWeather />
      {isMobileView ? <WeatherCardGrid /> : <Swiper />}
    </Wrapper>
  );
};

export default BottomOfTheBanner;
