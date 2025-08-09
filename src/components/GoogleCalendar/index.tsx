import { fetchCalendarEventsRequest } from "@store/actions/googleCalendarActions";
import React, { useState } from "react";
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
    /*   setLoading(true);
    setError(null);
 */
    /*     try {
      //    const response = await GoogleCalendarService.fetchEvents(accessToken);
      dispatch(fetchCalendarEventsRequest());
      //      setEvents(response.data.items || []);
    } catch (err) {
      setError("Error loading events");
      console.error(err);
    } finally {
      setLoading(false);
    } */

    try {
      dispatch(fetchCalendarEventsRequest({ accessToken }));

      const resultAction = await dispatch(fetchCalendarEventsRequest({ accessToken }));

      console.log("res", resultAction);
      /*   
  if (fetchCalendarEventsSuccess.match(resultAction)) {
    setEvents(resultAction.payload.events);  
  } else if (fetchCalendarEventsFailure.match(resultAction)) {
    setError(resultAction.payload);  
  } */
    } catch (err) {
      // setError("Error loading events");
      console.error(err);
    } finally {
      //  setLoading(false);
    }
  };

  /* 
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    return date.toLocaleString();
  };
 */
  return (
    <div>
      <button onClick={handleAuthClick}>{isSignedIn ? "Sign Out" : "Sign In with Google"}</button>
    </div>
  );
};
