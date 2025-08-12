import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "@components/Banner";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";
import { getUserLocation } from "@utils/helpers/getGeolocation/getGeolocation";

import { setCoordinats } from "@store/actions/currentCoordinatsAction";
import { fetchWeatherByCoordsRequest } from "@store/actions/currentWeatherActions";
import { fetchHourlyWeatherByCoordsRequest } from "@store/actions/weatherActions";

const WeekWeatherPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function handleLocation() {
      try {
        const coords = await getUserLocation();

        dispatch(setCoordinats({ latitude: coords.latitude, longitude: coords.longitude }));
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
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
