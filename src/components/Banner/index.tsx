import TopOfTheBanner from "@components/TopOfTheBanner";

import { BannerBackground, BannerWrapper } from "./styled";

const Banner = () => {
  return (
    <BannerWrapper>
      <TopOfTheBanner />
      <BannerBackground />
    </BannerWrapper>
  );
};

export default Banner;
