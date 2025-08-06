import Banner from "@components/Banner";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";

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
