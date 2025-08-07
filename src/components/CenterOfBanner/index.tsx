import AuthButtons from "@components/AuthButtons";
import EventList from "@components/EventList";

import { Wrapper } from "./styled";

const CenterOfBanner = () => {
  return (
    <Wrapper>
      <AuthButtons />
      <EventList />
    </Wrapper>
  );
};

export default CenterOfBanner;
