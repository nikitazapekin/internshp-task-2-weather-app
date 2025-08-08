import CenterOfBanner from "@components/CenterOfBanner";
import TopOfTheBanner from "@components/TopOfTheBanner";

import { BannerBackground, Wrapper } from "./styled";

const Banner = () => {
  return (
    <Wrapper>
      <TopOfTheBanner />
      <CenterOfBanner />
      <BannerBackground />
    </Wrapper>
  );
};

export default Banner;
