import Background from "@assets/Background.png";
import Banner from "@components/Banner";
import { GlobalStyle, PageWrapper, Reset, WrapperContainer } from "@styles";

const WeekWeatherPage = () => {
  return (
    <PageWrapper>
      <WrapperContainer>
        <GlobalStyle />
        <Reset />
        <Banner />
        <img
          src={Background}
          style={{
            position: "fixed",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: "-3",
          }}
        />
      </WrapperContainer>
    </PageWrapper>
  );
};

export default WeekWeatherPage;
