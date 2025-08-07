import AuthButtons from "@components/AuthButtons";
import EventList from "@components/EventList";
import WeatherButtons from "@components/WeatherButtons";

import { AuthButtonsAndEvents, Wrapper } from "./styled";

const CenterOfBanner = () => {
  return (
    <Wrapper>
      <AuthButtons />
      <AuthButtonsAndEvents>
        <EventList />
        <WeatherButtons />
      </AuthButtonsAndEvents>
    </Wrapper>
  );
};

export default CenterOfBanner;
