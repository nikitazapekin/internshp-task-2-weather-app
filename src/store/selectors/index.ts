import type { RootState } from "..";

export const selectCalendarEvents = (state: RootState) => state.calendarReducer.events;
export const selectCalendarEventsLoading = (state: RootState) => state.calendarReducer.loading;
export const selectCurrentWeather = (state: RootState) => state.currentWeatherReducer.data;
export const selectCurrentWeatherLoading = (state: RootState) =>
  state.currentWeatherReducer.loading;
export const selectCurrentCoordinats = (state: RootState) => state.coordinatsReducer;
export const selectHorlyWeather = (state: RootState) => state.weatherReducer.data;
export const selectWeeklyWeather = (state: RootState) => state.weatherReducer.data;
export const selectTimeOfWeather = (state: RootState) => state.weatherReducer.timeOfWeather;
export const selectIsLoading = (state: RootState) => state.weatherReducer.loading;
export const selectCitiesSuggestions = (state: RootState) => state.elasticReducer.data;
export const selectCitiesSuggestionsLoading = (state: RootState) => state.elasticReducer.loading;
