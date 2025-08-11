import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "@components/Banner";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";
import { getUserLocation } from "@utils/helpers/getGeolocation/getGeolocation";

import { setCoordinats } from "@store/actions/currentCoordinatsAction";
import { fetchWeatherByCityRequest } from "@store/actions/currentWeatherActions";
import { fetchHourlyWeatherByCityRequest } from "@store/actions/weatherActions";

const WeekWeatherPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function handleLocation() {
      try {
        const coords = await getUserLocation();

        dispatch(setCoordinats({ latitude: coords.latitude, longitude: coords.longitude }));
      } catch (e) {
        console.log(e);
      }
    }

    handleLocation().catch((error) => {
      console.error("Error:", error);
    });
  }, []);

  useEffect(() => {
    dispatch(fetchWeatherByCityRequest({ city: "Moscow" }));
    dispatch(fetchHourlyWeatherByCityRequest({ city: "Minsk" }));
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
