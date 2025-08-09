import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { fetchCalendarEventsRequest } from "@store/actions/googleCalendarActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Wrapper } from "./styled";

const AuthButtons = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleAuthClick = () => {
    if (isSignedIn) {
      setIsSignedIn(false);
    } else {
      const client = window.google?.accounts.oauth2.initTokenClient({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: process.env.REACT_APP_API_GOOGLE_SCOPE,

        callback: async (tokenResponse) => {
          if (tokenResponse.access_token) {
            setIsSignedIn(true);
            try {
              await fetchEvents(tokenResponse.access_token);
            } catch {
              setIsSignedIn(false);
            }
          }
        },
      });

      client.requestAccessToken();
    }
  };
  const dispatch = useDispatch();
  const fetchEvents = async (accessToken: string) => {
    try {
      dispatch(fetchCalendarEventsRequest({ accessToken }));

      await dispatch(fetchCalendarEventsRequest({ accessToken }));
    } catch (err) {
      console.error(err);
    }
  };

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
