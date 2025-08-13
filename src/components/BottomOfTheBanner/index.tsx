import { useSelector } from "react-redux";
import GeolocationIsTurnOff from "@components/GeolocationIsTurnOff";
import Spinner from "@components/Spinner";
import Swiper from "@components/Swiper";
import TodayWeather from "@components/TodayWeather";
import WeatherCardGrid from "@components/WeatherCardsList";
import useResize from "@hooks/useResize";

import { selectCurrentCoordinats, selectHorlyWeather, selectIsLoading } from "@store/selectors";

import { Wrapper } from "./styled";

const BottomOfTheBanner = () => {
  const { isMobileView } = useResize();
  const weatherElements = useSelector(selectHorlyWeather);
  const { latitude, longitude, isGeolocationDenied } = useSelector(selectCurrentCoordinats);
  const isLoadingContent = useSelector(selectIsLoading);

  if (isLoadingContent) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  if (latitude === null && longitude === null && !isGeolocationDenied) {
    return null;
  }

  if (isGeolocationDenied) {
    return (
      <Wrapper>
        <GeolocationIsTurnOff />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {isMobileView ? (
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
