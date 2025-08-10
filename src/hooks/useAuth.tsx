import { ACCESS_TOKEN_CONSTANT } from "@constants/localstorageConstants";
import { cleanUpEvents, fetchCalendarEventsRequest } from "@store/actions/googleCalendarActions";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import type { GoogleTokenResponse } from "./types";

const useAuth = () => {
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState(localStorage.getItem(ACCESS_TOKEN_CONSTANT));

  useEffect(() => {
    setAccessToken(localStorage.getItem(ACCESS_TOKEN_CONSTANT));
  }, []);

  const handleAuthClick = useCallback(() => {
    if (accessToken !== null) {
      localStorage.removeItem(ACCESS_TOKEN_CONSTANT);
      setAccessToken(null);

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
          localStorage.setItem(ACCESS_TOKEN_CONSTANT, tokenResponse.access_token);
          setAccessToken(tokenResponse.access_token);
          try {
            await dispatch(
              fetchCalendarEventsRequest({
                accessToken: tokenResponse.access_token,
              })
            );
          } catch {
            localStorage.removeItem(ACCESS_TOKEN_CONSTANT);
            setAccessToken(null);
          }
        }
      },
    });

    client.requestAccessToken();
  }, [accessToken]);

  useEffect(() => {
    if (accessToken !== null) {
      dispatch(fetchCalendarEventsRequest({ accessToken }));
    } else {
      dispatch(cleanUpEvents());
    }
  }, [accessToken]);

  return { isSignedIn: accessToken !== null, handleAuthClick };
};

export default useAuth;
