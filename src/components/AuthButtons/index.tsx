import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import useAuth from "@hooks/useAuth";

import { Wrapper } from "./styled";

const AuthButtons = () => {
  const { isSignedIn, handleAuthClick } = useAuth();

  return (
    <Wrapper>
      <Button
        text={isSignedIn ? UI_CONSTANTS.buttons.signOutButton : UI_CONSTANTS.buttons.loginButton}
        handler={handleAuthClick}
      />
    </Wrapper>
  );
};

export default AuthButtons;
