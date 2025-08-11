import type { RootState } from "..";

export const selectWeeklyWeather = (state: RootState) => state.weeklyWeatherCityReducer.data;
