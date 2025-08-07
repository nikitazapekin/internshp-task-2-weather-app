import BottomOfTheBanner from "@components/BottomOfTheBanner";
import TopOfTheBanner from "@components/TopOfTheBanner";

import { BannerBackground, Wrapper } from "./styled";

const Banner = () => {
  return (
    <Wrapper>
      <TopOfTheBanner />

      <BottomOfTheBanner />
      <BannerBackground />
    </Wrapper>
  );
};

export default Banner;
