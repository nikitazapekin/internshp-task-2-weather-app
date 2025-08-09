import type { CalendarEvent } from "@interfaces/googleCalendarTypes";
import { createAction } from "@reduxjs/toolkit";

interface FetchCalendarEventsRequestPayload {
  accessToken: string;
}

interface FetchCalendarEventsSuccessPayload {
  events: CalendarEvent[];
}

export const fetchCalendarEventsRequest =
  createAction<FetchCalendarEventsRequestPayload>("calendar/fetchRequest");

export const fetchCalendarEventsSuccess =
  createAction<FetchCalendarEventsSuccessPayload>("calendar/fetchSuccess");

export const fetchCalendarEventsFailure = createAction<string>("calendar/fetchFailure");
/*  import { createAction } from "@reduxjs/toolkit";

interface WeatherSuccessPayload {
  title: string;
}

export const fetchCalendarEventsRequest = createAction("calendar/fetchRequest");
export const fetchCalendarEventsSuccess = createAction<WeatherSuccessPayload>("calendar/fetchSuccess");
export const fetchCalendarEventsFailure = createAction<string>("calendar/fetchFailure");
 */
