import type { RootState } from "..";

export const selectCalendarEvents = (state: RootState) => state.calendarReducer.events;
