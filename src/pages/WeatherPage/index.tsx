import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Background from "@components/Background";
import Banner from "@components/Banner";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";
import { getUserLocation } from "@utils/helpers";

import { setCoordinats, setGeolocationDenied } from "@store/actions/currentCoordinats";
import { fetchWeatherByCoordsRequest } from "@store/actions/currentWeather";
import { fetchHourlyWeatherByCoordsRequest } from "@store/actions/weather";

const WeekWeatherPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function handleLocation() {
      try {
        const coords = await getUserLocation();

        dispatch(
          setCoordinats({
            latitude: coords.latitude,
            longitude: coords.longitude,
            isGeolocationDenied: false,
          })
        );
        dispatch(
          fetchWeatherByCoordsRequest({ latitude: coords.latitude, longitude: coords.longitude })
        );
        dispatch(
          fetchHourlyWeatherByCoordsRequest({
            latitude: coords.latitude,
            longitude: coords.longitude,
          })
        );
      } catch (e) {
        console.log(e);
        dispatch(setGeolocationDenied());
      }
    }

    handleLocation().catch((e) => console.error(e));
  }, [dispatch]);

  return (
    <PageWrapper>
      <WrapperContainer>
        <GlobalStyle />
        <Reset />
        <Banner />
        <Background />
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
