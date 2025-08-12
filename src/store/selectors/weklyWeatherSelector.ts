import type { RootState } from "..";

export const selectWeeklyWeather = (state: RootState) => state.weatherReducer.data;
export const selectTimeOfWeather = (state: RootState) => state.weatherReducer.timeOfWeather;
