import AuthButtons from "@components/AuthButtons";
import EventList from "@components/EventList";
import WeatherButtons from "@components/WeatherButtons";

import { EventsAndWeatherButtonsWrapper, Wrapper } from "./styled";

const CenterOfBanner = () => {
  return (
    <Wrapper>
      <AuthButtons />
      <EventsAndWeatherButtonsWrapper>
        <EventList />
        <WeatherButtons />
      </EventsAndWeatherButtonsWrapper>
    </Wrapper>
  );
};

export default CenterOfBanner;
