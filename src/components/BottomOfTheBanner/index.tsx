import Swiper from "@components/Swiper";
import TodayWeather from "@components/TodayWeather";

import { Wrapper } from "./styled";

const BottomOfTheBanner = () => {
  return (
    <Wrapper>
      <TodayWeather />
      <Swiper />
    </Wrapper>
  );
};

export default BottomOfTheBanner;
