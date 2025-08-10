import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { fetchCalendarEventsRequest } from "@store/actions/googleCalendarActions";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Wrapper } from "./styled";
import type { GoogleTokenResponse } from "./types";

const useAuth = () => {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return !!localStorage.getItem("accessToken");
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setIsSignedIn(!!localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleAuthClick = useCallback(() => {
    if (isSignedIn) {
      localStorage.removeItem("accessToken");
      setIsSignedIn(false);

      return;
    }

    const googleAuth = (window as unknown as { google?: unknown })?.google;

    if (!googleAuth || typeof googleAuth !== "object" || !("accounts" in googleAuth)) {
      return;
    }

    const accounts = (googleAuth as { accounts: unknown }).accounts;

    if (typeof accounts !== "object" || !accounts || !("oauth2" in accounts)) {
      return;
    }

    const oauth2 = (accounts as { oauth2: unknown }).oauth2;

    if (typeof oauth2 !== "object" || !oauth2 || !("initTokenClient" in oauth2)) {
      return;
    }

    const initTokenClient = (oauth2 as { initTokenClient: Function }).initTokenClient;

    const client = initTokenClient({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
      scope: process.env.REACT_APP_API_GOOGLE_SCOPE || "",
      callback: async (tokenResponse: GoogleTokenResponse) => {
        if (tokenResponse.access_token) {
          localStorage.setItem("accessToken", tokenResponse.access_token);
          setIsSignedIn(true);
          try {
            await dispatch(
              fetchCalendarEventsRequest({
                accessToken: tokenResponse.access_token,
              })
            );
          } catch {
            localStorage.removeItem("accessToken");
            setIsSignedIn(false);
          }
        }
      },
    });

    client.requestAccessToken();
  }, [isSignedIn]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      dispatch(fetchCalendarEventsRequest({ accessToken: token }));
    }
  }, []);

  return { isSignedIn, handleAuthClick };
};

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
