import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "@components/Banner";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";
import { getUserLocation } from "@utils/helpers/getGeolocation/getGeolocation";

import { setCoordinats } from "@store/actions/currentCoordinatsAction";

const WeekWeatherPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function handleLocation() {
      try {
        const coords = await getUserLocation();

        dispatch(setCoordinats({ latitude: coords.latitude, longitude: coords.longitude }));
      } catch (error) {
        console.error("Error getting location:", error);
      }
    }

    handleLocation().catch((error) => {
      console.error("Error:", error);
    });
  }, []);

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
