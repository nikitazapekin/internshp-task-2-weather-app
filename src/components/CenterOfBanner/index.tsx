import AuthButtons from "@components/AuthButtons";
import ErrorBoundary from "@components/ErrorBoundary";
import EventList from "@components/EventList";
import WeatherButtons from "@components/WeatherButtons";
import { UI_CONSTANTS } from "@constants/UI";
import useResize from "@hooks/useResize";

import {
  AuthButtonsAndEventsWrapper,
  EventsAndWeatherButtonsWrapper,
  TitleOfEvents,
  Wrapper,
} from "./styled";

const CenterOfBanner = () => {
  const { isMobileView } = useResize();
  const { mobileTitleOfEvents } = UI_CONSTANTS;

  return (
    <ErrorBoundary>
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
            <TitleOfEvents>{mobileTitleOfEvents}</TitleOfEvents>
            <AuthButtonsAndEventsWrapper>
              <AuthButtons />
              <EventList />
            </AuthButtonsAndEventsWrapper>
            <WeatherButtons />
          </>
        )}
      </Wrapper>
    </ErrorBoundary>
  );
};

export default CenterOfBanner;
