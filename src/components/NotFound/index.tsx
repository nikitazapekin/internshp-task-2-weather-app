import { useNavigate } from "react-router-dom";
import NoGeolocationBackground from "@assets/promo_660_x_440_weather_-_forecast_weather_strips_-_istock.png.webp";
import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants";
import { MAIN_PAGE } from "@constants";

import { Content, Image, Text, Title, Wrapper } from "./styled";

const NotFound = () => {
  const { backToHomepage } = UI_CONSTANTS.buttons;
  const navigate = useNavigate();
  const handleNavigateToHomepage = () => {
    void navigate(MAIN_PAGE);
  };

  return (
    <Wrapper>
      <Image src={NoGeolocationBackground} />
      <Content>
        <Title>Page Not Found</Title>
        <Text> The page you have reached does not exist</Text>
        <Button text={backToHomepage} handler={handleNavigateToHomepage} />
      </Content>
    </Wrapper>
  );
};

export default NotFound;
