import CenterOfBanner from "@components/CenterOfBanner";
import { GoogleCalendar } from "@components/GoogleCalendar";
import TopOfTheBanner from "@components/TopOfTheBanner";

import { BannerBackground, TopAndCenterOfBannerWrapper, Wrapper } from "./styled";

const Banner = () => {
  return (
    <Wrapper>
      <TopAndCenterOfBannerWrapper>
        <TopOfTheBanner />
        <CenterOfBanner />
        <GoogleCalendar />
      </TopAndCenterOfBannerWrapper>
      <BannerBackground />
    </Wrapper>
  );
};

export default Banner;
