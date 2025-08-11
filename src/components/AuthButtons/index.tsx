import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import useAuth from "@hooks/useAuth";

import { Wrapper } from "./styled";

const AuthButtons = () => {
  const { isSignedIn, handleAuthClick } = useAuth();
  const { signOutButton, loginButton } = UI_CONSTANTS.buttons;

  return (
    <Wrapper>
      <Button text={isSignedIn ? signOutButton : loginButton} handler={handleAuthClick} />
    </Wrapper>
  );
};

export default AuthButtons;
