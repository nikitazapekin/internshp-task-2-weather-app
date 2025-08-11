import type { RootState } from "..";

export const selectCurrentWeather = (state: RootState) => state.currentWeatherReducer.data;
export const selectCurrentWeatherLoading = (state: RootState) =>
  state.currentWeatherReducer.loading;
