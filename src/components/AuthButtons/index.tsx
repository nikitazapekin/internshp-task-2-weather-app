import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";

import { Wrapper } from "./styled";

const AuthButtons = () => {
  return (
    <Wrapper>
      <Button text={UI_CONSTANTS.buttons.loginButton} handler={() => {}} />
    </Wrapper>
  );
};

export default AuthButtons;
