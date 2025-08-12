import type { RootState } from "..";

export const selectHorlyWeather = (state: RootState) => state.weatherReducer.data;
