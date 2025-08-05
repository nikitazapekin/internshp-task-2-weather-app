import { GlobalStyle } from "./styles/globals";
import { Reset } from "./styles/reset";
import { PageWrapper, WrapperContainer } from "./styles/wrapper";

const WeekWeatherPage = () => {
  return (
    <PageWrapper>
      <WrapperContainer>
        <Reset />
        <GlobalStyle />
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
