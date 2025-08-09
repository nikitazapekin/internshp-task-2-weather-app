import { fetchCalendarEventsRequest } from "@store/actions/googleCalendarActions";
import { fetchWeatherRequest } from "@store/actions/weatherActions";
import { selectCalendarEvents } from "@store/selectors/calendarEvents";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const GoogleCalendar: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  /*  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); */

  const handleAuthClick = () => {
    if (isSignedIn) {
      setIsSignedIn(false);
      /*  setEvents([]);
      setError(null); */
    } else {
      const client = window.google?.accounts.oauth2.initTokenClient({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "https://www.googleapis.com/auth/calendar.readonly",

        callback: async (tokenResponse) => {
          if (tokenResponse.access_token) {
            setIsSignedIn(true);
            try {
              await fetchEvents(tokenResponse.access_token);
            } catch {
              setIsSignedIn(false);
              // setError("Failed to load events");
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

  const handleElasticSearch = () => {
    dispatch(fetchWeatherRequest());
  };

  const events = useSelector(selectCalendarEvents);

  console.log(events);

  return (
    <div>
      <button onClick={handleAuthClick}>{isSignedIn ? "Sign Out" : "Sign In with Google"}</button>

      <button onClick={handleElasticSearch}>test</button>
    </div>
  );
};
