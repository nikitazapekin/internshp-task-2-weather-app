import AuthButtons from "@components/AuthButtons";
import EventList from "@components/EventList";
import WeatherButtons from "@components/WeatherButtons";
import useResize from "@hooks/useResize";

import { AuthButtonsAndEventsWrapper, EventsAndWeatherButtonsWrapper, Wrapper } from "./styled";

const CenterOfBanner = () => {
  const { isMobileView } = useResize();

  return (
    <Wrapper>
      {!isMobileView ? (
        <>
          <AuthButtons />
          <EventsAndWeatherButtonsWrapper>
            <EventList />
            <WeatherButtons />
          </EventsAndWeatherButtonsWrapper>
        </>
      ) : (
        <>
          <AuthButtonsAndEventsWrapper>
            <AuthButtons />
            <EventList />
          </AuthButtonsAndEventsWrapper>
          <WeatherButtons />
        </>
      )}
    </Wrapper>
  );
};

export default CenterOfBanner;
