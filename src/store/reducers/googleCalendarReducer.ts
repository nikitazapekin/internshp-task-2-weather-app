import type { CalendarEvent } from "@interfaces/googleCalendarTypes";
import { createReducer } from "@reduxjs/toolkit";
import {
  cleanUpEvents,
  fetchCalendarEventsFailure,
  fetchCalendarEventsRequest,
  fetchCalendarEventsSuccess,
} from "@store/actions/googleCalendarActions";

interface CalendarEventsState {
  loading: boolean;
  error: string | null;
  events: CalendarEvent[];
}

const initialState: CalendarEventsState = {
  loading: false,
  error: null,
  events: [],
};

export const calendarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCalendarEventsRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCalendarEventsSuccess, (state, action) => {
      state.loading = false;
      state.events = action.payload.events;
    })
    .addCase(fetchCalendarEventsFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(cleanUpEvents, (state) => {
      state.events = [];
    });
});
