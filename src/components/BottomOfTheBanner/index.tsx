import { useSelector } from "react-redux";
import GeolocationIsTurnOff from "@components/GeolocationIsTurnOff";
import Swiper from "@components/Swiper";
import TodayWeather from "@components/TodayWeather";
import WeatherCardGrid from "@components/WeatherCardsList";
import useResize from "@hooks/useResize";

import { selectCurrentCoordinats, selectHorlyWeather } from "@store/selectors";

import { Wrapper } from "./styled";

const BottomOfTheBanner = () => {
  const { isMobileView } = useResize();
  const weatherElements = useSelector(selectHorlyWeather);
  const { latitude, longitude } = useSelector(selectCurrentCoordinats);

  const isGeolocationTurnedOff = !latitude || !longitude || !weatherElements;

  return (
    <Wrapper>
      {isGeolocationTurnedOff ? (
        <GeolocationIsTurnOff />
      ) : isMobileView ? (
        <>
          <TodayWeather />
          <WeatherCardGrid weatherElements={weatherElements} />
        </>
      ) : (
        <>
          <TodayWeather />
          <Swiper weatherElements={weatherElements} />
        </>
      )}
    </Wrapper>
  );
};

export default BottomOfTheBanner;
