import Banner from "@components/Banner";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";

const WeekWeatherPage = () => {
  return (
    <PageWrapper>
      <WrapperContainer>
        <GlobalStyle />
        <Reset />
        <Banner />
        Hello world!
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
