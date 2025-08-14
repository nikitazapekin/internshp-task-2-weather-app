import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "@components/Banner";
import ErrorContent from "@components/ErrorContent";
import Modal from "@components/Modal";
import { UI_CONSTANTS } from "@constants/UI";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";
import { getUserLocation } from "@utils/helpers";

import { fetchCurrentCityRequest } from "@store/actions/currentCity";
import { setCoordinats, setGeolocationDenied } from "@store/actions/currentCoordinats";
import { fetchWeatherByCoordsRequest } from "@store/actions/currentWeather";
import { fetchHourlyWeatherByCoordsRequest } from "@store/actions/weather";

const WeatherPage = () => {
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

        dispatch(
          fetchCurrentCityRequest({ latitude: coords.latitude, longitude: coords.longitude })
        );
      } catch {
        dispatch(setGeolocationDenied());
      }
    }

    handleLocation().catch((e) => console.error(e));
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };
  const { defaultErrorMessage, defaultErrorTitle } = UI_CONSTANTS.errorsModal;

  return (
    <PageWrapper>
      <WrapperContainer>
        <GlobalStyle />
        <Reset />
        <Banner />
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <ErrorContent title={defaultErrorTitle} text={defaultErrorMessage} />
          </Modal>
        )}
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeatherPage;
