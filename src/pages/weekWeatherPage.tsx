import Banner from "@components/Banner";

import { GlobalStyle } from "../styled/globals";
import { Reset } from "../styled/reset";
import { PageWrapper, WrapperContainer } from "../styled/wrapper";

const WeekWeatherPage = () => {
  return (
    <PageWrapper>
      <WrapperContainer>
        <Reset />
        <GlobalStyle />
        <Banner />
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
