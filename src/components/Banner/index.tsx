import CenterOfBanner from "@components/CenterOfBanner";
import TopOfTheBanner from "@components/TopOfTheBanner";

import { BannerBackground, TopAndCenterOfBannerWrapper, Wrapper } from "./styled";

const Banner = () => {
  return (
    <Wrapper>
      <TopAndCenterOfBannerWrapper>
        <TopOfTheBanner />
        <CenterOfBanner />
      </TopAndCenterOfBannerWrapper>
      <BannerBackground />
    </Wrapper>
  );
};

export default Banner;
