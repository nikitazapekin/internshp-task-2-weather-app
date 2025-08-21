import BottomOfTheBanner from "@components/BottomOfTheBanner";
import CenterOfBanner from "@components/CenterOfBanner";
import TopOfTheBanner from "@components/TopOfTheBanner";

import { BannerBackground, TopAndCenterOfBannerWrapper, Wrapper } from "./styled";

const Banner = () => {
  return (
    <Wrapper data-testid="banner">
      <TopAndCenterOfBannerWrapper>
        <TopOfTheBanner />
        <CenterOfBanner />
      </TopAndCenterOfBannerWrapper>
      <BottomOfTheBanner />
      <BannerBackground />
    </Wrapper>
  );
};

export default Banner;
