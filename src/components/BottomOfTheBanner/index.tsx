import { useSelector } from "react-redux";
import GeolocationIsTurnOff from "@components/GeolocationIsTurnOff";
import Spinner from "@components/Spinner";
import Swiper from "@components/Swiper";
import TodayWeather from "@components/TodayWeather";
import WeatherCardGrid from "@components/WeatherCardsList";
import useResize from "@hooks/useResize";

import { selectCitiesSuggestions, selectCurrentCoordinats, selectWeather } from "@store/selectors";

import { Wrapper } from "./styled";

const BottomOfTheBanner = () => {
  const { isMobileView } = useResize();
  const { data, loading } = useSelector(selectWeather);
  const { latitude, longitude, isGeolocationDenied } = useSelector(selectCurrentCoordinats);
  const { isElasticActive } = useSelector(selectCitiesSuggestions);

  if (loading) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  if (latitude === null && longitude === null && !isGeolocationDenied) {
    return null;
  }

  if (isGeolocationDenied && !isElasticActive) {
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
          <WeatherCardGrid weatherElements={data} />
        </>
      ) : (
        <>
          <TodayWeather />
          <Swiper weatherElements={data} />
        </>
      )}
    </Wrapper>
  );
};

export default BottomOfTheBanner;
