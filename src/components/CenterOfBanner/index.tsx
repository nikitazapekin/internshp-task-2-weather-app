import AuthButtons from "@components/AuthButtons";
import EventList from "@components/EventList";
import WeatherButtons from "@components/WeatherButtons";
import { BREAKPOINT_TRIGGER_WIDTH } from "@constants";
import { useEffect, useState } from "react";

import { AuthButtonsAndEventsWrapper, EventsAndWeatherButtonsWrapper, Wrapper } from "./styled";

const CenterOfBanner = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= BREAKPOINT_TRIGGER_WIDTH);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
