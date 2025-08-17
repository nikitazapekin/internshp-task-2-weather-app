import { useNavigate } from "react-router-dom";
import NoGeolocationBackground from "@assets/NoGeolocationBackground.webp";
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
    <Wrapper data-testid="not-found-page">
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
