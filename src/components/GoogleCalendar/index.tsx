import GoogleCalendarService from "@api/googleCalendarService";
import type { CalendarEvent } from "@interfaces/googleCalendarTypes";
import React, { useState } from "react";

export const GoogleCalendar: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuthClick = () => {
    if (isSignedIn) {
      setIsSignedIn(false);
      setEvents([]);
      setError(null);
    } else {
      const client = window.google?.accounts.oauth2.initTokenClient({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "https://www.googleapis.com/auth/calendar.readonly",
        /*  callback: (tokenResponse) => {
          if (tokenResponse.access_token) {
            setIsSignedIn(true);
            fetchEvents(tokenResponse.access_token);
          }
        }, */
        callback: async (tokenResponse) => {
          if (tokenResponse.access_token) {
            setIsSignedIn(true);
            try {
              await fetchEvents(tokenResponse.access_token);
            } catch (err) {
              console.error("Failed to fetch events:", err);
              setIsSignedIn(false);
              setError("Failed to load events");
            }
          }
        },
      });

      client.requestAccessToken();
    }
  };

  const fetchEvents = async (accessToken: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await GoogleCalendarService.fetchEvents(accessToken);

      setEvents(response.data.items || []);
    } catch (err) {
      setError("Error loading events");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    return date.toLocaleString();
  };

  return (
    <div>
      <button onClick={handleAuthClick}>{isSignedIn ? "Sign Out" : "Sign In with Google"}</button>

      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}

      {isSignedIn && !loading && (
        <div>
          <h3>Events</h3>
          {events.length === 0 ? (
            <p>No upcoming events found</p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <strong>{event.summary}</strong>
                  <div>Start: {formatDate(event.start.dateTime || event.start.date)}</div>
                  {event.end && <div>End: {formatDate(event.end.dateTime || event.end.date)}</div>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
/* import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInRequest, signOut, fetchEventsRequest } from "@store/actions/googleCalendarActions";

import {
  selectIsSignedIn,
  selectEvents,
  selectEventsError,
  selectEventsLoading,
} from "@store/selectors/googleCalendarSelector";
import type { CalendarEvent } from "@interfaces/googleCalendarTypes";

export const GoogleCalendar: React.FC = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const events = useSelector(selectEvents);
  const loading = useSelector(selectEventsLoading);
  const error = useSelector(selectEventsError);

  const handleAuthClick = () => {
    if (isSignedIn) {
      dispatch(signOut());
    } else {
      dispatch(signInRequest());
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchEventsRequest());
    }
  }, [isSignedIn, dispatch]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div>
      <button onClick={handleAuthClick}>{isSignedIn ? "Sign Out" : "Sign In with Google"}</button>

      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}

      {isSignedIn && !loading && (
        <div>
          <h3>Events</h3>
          {events.length === 0 ? (
            <p>No upcoming events found</p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <strong>{event.summary}</strong>
                  <div>Start: {formatDate(event.start.dateTime || event.start.date)}</div>
                  {event.end && <div>End: {formatDate(event.end.dateTime || event.end.date)}</div>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}; */
/* import React, { useState, useEffect } from 'react';

interface CalendarEvent {
  id: string;
  summary: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

export const GoogleCalendar: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuthClick = () => {
    if (isSignedIn) {
      setIsSignedIn(false);
      setEvents([]);
      setError(null);
    } else {
      const client = window.google?.accounts.oauth2.initTokenClient({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
        callback: (tokenResponse) => {
          if (tokenResponse.access_token) {
            setIsSignedIn(true);
            fetchEvents(tokenResponse.access_token);
          }
        },
      });
      client.requestAccessToken();
    }
  };

  const fetchEvents = async (accessToken: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?` +
        `maxResults=10&orderBy=startTime&singleEvents=true&` +
        `timeMin=${new Date().toISOString()}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const data = await response.json();
      setEvents(data.items || []);
    } catch (err) {
      setError('Error loading events');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div>
      <button 
        onClick={handleAuthClick}
      
      >
        {isSignedIn ? 'Sign Out' : 'Sign In with Google'}
      </button>

      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}

      {isSignedIn && !loading && (
        <div >
          <h3>Events</h3>
          {events.length === 0 ? (
            <p>No upcoming events found</p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <strong>{event.summary}</strong>
                  <div>Start: {formatDate(event.start.dateTime || event.start.date)}</div>
                  {event.end && <div>End: {formatDate(event.end.dateTime || event.end.date)}</div>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
 */
