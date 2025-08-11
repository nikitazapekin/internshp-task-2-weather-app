import type { RootState } from "..";

export const selectCalendarEvents = (state: RootState) => state.calendarReducer.events;
export const selectCalendarEventsLoading = (state: RootState) => state.calendarReducer.loading;
