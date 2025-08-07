import TopOfTheBanner from "@components/TopOfTheBanner";

import { BannerBackground, Wrapper } from "./styled";

const Banner = () => {
  return (
    <Wrapper>
      <TopOfTheBanner />
      <BannerBackground />
    </Wrapper>
  );
};

export default Banner;
