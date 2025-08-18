import BottomOfTheBanner from "@components/BottomOfTheBanner";
import CenterOfBanner from "@components/CenterOfBanner";
import ErrorBoundary from "@components/ErrorBoundary";
import TopOfTheBanner from "@components/TopOfTheBanner";

import { BannerBackground, TopAndCenterOfBannerWrapper, Wrapper } from "./styled";

const Banner = () => {
  return (
    <ErrorBoundary>
      <Wrapper>
        <TopAndCenterOfBannerWrapper>
          <TopOfTheBanner />
          <CenterOfBanner />
        </TopAndCenterOfBannerWrapper>
        <BottomOfTheBanner />
        <BannerBackground />
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Banner;
